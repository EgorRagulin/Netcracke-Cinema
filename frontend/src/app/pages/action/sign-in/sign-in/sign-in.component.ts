import {Component, OnDestroy, OnInit} from '@angular/core';
import {SecurityLoginModel} from "../../../../models/security/security.login.model";
import {StorageService} from "../../../../services/security/storage.service";
import {LoginService} from "../../../../services/security/login-service";
import {LoadingService} from "../../../../services/loading/loading.service";
import {StorageTokenModel} from "../../../../models/storage/storage.token.model";
import {Router} from "@angular/router";
import {finalize} from "rxjs/operators";
import {LoginModel} from "../../../../models/login.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Validation} from "../../../../form-validation/validation";
import {Subscription} from "rxjs";
import {FormValidationService} from "../../../../services/form-validation/form-validation.service";
import {UserModel} from "../../../../models/user.model";
import {CurrentLoginService} from "../../../../services/current-login/current-login.service";
import {CurrentUserService} from "../../../../services/current-user/current.user.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  public login: SecurityLoginModel = {};

  public singInForm: FormGroup;

  public validationMessages = Validation.validationMessages;

  public isLoading: boolean;
  public hide: boolean = true;
  public showCheckYourSetDataAlert: boolean = false;

  constructor(private loginService: LoginService,

              public storageService: StorageService,
              private currentLoginService: CurrentLoginService,
              private currentUserService: CurrentUserService,

              private loadingService: LoadingService,

              private fb: FormBuilder,
              public formValidationService: FormValidationService,

              private router: Router,) { }

  ngOnInit(): void {
    this.createSignInForms();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  private createSignInForms() {
    this.singInForm = this.fb.group({
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

  public singIn(): void {
    if(this.singInForm.valid) {
      this.isLoading = this.loadingService.changeLoadingStatus(true);

      this.setTokenToStorage();
    }
    else alert('Oh, you sly beetle!');
  }

  private setTokenToStorage(): void {
    this._subscriptions.push(
      this.loginService.generateToken(this.login)
        .subscribe((authToken: StorageTokenModel) => {
          this.storageService.setToken(authToken.token);
          this.setCurrentLogin();
        }, (error) => {
          if (error.status === 401) this.showCheckYourSetDataAlert = true;
          else alert(error.message);
          this.isLoading = this.loadingService.changeLoadingStatus(false);
        })
    );
  }

  private setCurrentLogin(): void {
    this.loginService.getAuthorizedLogin()
      .subscribe((currentLogin: LoginModel) => {
        this.storageService.setCurrentLogin(currentLogin);
        this.currentLoginService.setCurrentLogin(currentLogin);
        this.setCurrentUser(currentLogin.id);
      }, (error) => {
        alert(error.message);
        this.isLoading = this.loadingService.changeLoadingStatus(false);
      });

  }

  private setCurrentUser(loginId: number): void {
    if(loginId != NaN) {
        this.loginService.getAuthorizedUser(loginId)
          .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
          .subscribe((currentUser: UserModel) => {
            if (currentUser) {
              this.router.navigate(['my-profile']);
              this.currentUserService.setCurrentUser(currentUser);
            }
            else this.router.navigate(['create-user']);
          }, (error) => {
            if (error.status === 400) {
              alert("User not found!");
              this.router.navigate(['create-user']);
            } else {
              alert(error.message);
            }
          });
    }
    this.isLoading = this.loadingService.changeLoadingStatus(false);
  }

  public toggle(): void {
    this.hide = !this.hide;
  }
}
