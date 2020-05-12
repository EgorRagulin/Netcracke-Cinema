import { Component, OnInit } from '@angular/core';
import {SecurityLoginModel} from "../../../../models/security/security.login.model";
import {StorageService} from "../../../../services/security/storage.service";
import {LoginService} from "../../../../services/security/login-service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {LoadingService} from "../../../../services/loading/loading.service";
import {LoginModel} from "../../../../models/login.model";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private _subscriptions: Subscription[] = [];
  public loginModel: LoginModel = new LoginModel();
  public isLoading: boolean = false;
  public hide: boolean = true;

  constructor(private loadingService: LoadingService,
              public storageService: StorageService,
              private loginService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  public createLogin(): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(
      this.loginService.saveLogin(this.loginModel).subscribe((savedLogin: LoginModel) => {
        this.router.navigate(['sign-in']);
        this.isLoading = this.loadingService.changeLoadingStatus(false);
      }, error => {
        alert(error.message);
        this.isLoading = this.loadingService.changeLoadingStatus(false);
      })
    );
  }

  public toggle(): void {
    this.hide = !this.hide;
  }
}
