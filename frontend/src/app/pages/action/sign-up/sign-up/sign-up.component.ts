import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../../services/security/storage.service";
import {LoginService} from "../../../../services/security/login-service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {LoadingService} from "../../../../services/loading/loading.service";
import {LoginModel} from "../../../../models/login.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Validation} from "../../../../form-validation/validation";
import {finalize} from "rxjs/operators";
import {FormValidationService} from "../../../../services/form-validation/form-validation.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private _subscriptions: Subscription[] = [];
  public isLoading: boolean;

  public login: LoginModel = new LoginModel();

  public singUpForm: FormGroup;

  public validationMessages = Validation.validationMessages;

  public hide: boolean = true;

  constructor(public storageService: StorageService,
              private loginService: LoginService,
              private loadingService: LoadingService,
              private fb: FormBuilder,
              public formValidationService: FormValidationService,
              private router: Router) { }

  ngOnInit() {
    this.createSignUpForms();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  private createSignUpForms() {
    this.singUpForm = this.fb.group({
      username: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern(Validation.validatorsPatterns.cyrillic_latin_numbers)
        ]],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15),
          Validators.pattern(Validation.validatorsPatterns.password)
        ]]
    });
  }

  public createLogin(): void {
    if(this.singUpForm.valid) {
      this.isLoading = this.loadingService.changeLoadingStatus(true);

      this._subscriptions.push(
        this.loginService.saveLogin(this.login)
          .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
          .subscribe((savedLogin: LoginModel) => this.router.navigate(['sign-in']),
            (error) => alert(error.message)));
    }
    else alert('Oh, you sly beetle!');
  }

  public toggle(): void {
    this.hide = !this.hide;
  }
}
