import { Injectable } from '@angular/core';
import {LoginModel} from "../../models/login.model";
import {LoginService} from "../security/login-service";
import {AsyncSubject, Subject} from "rxjs";
import {UserRoleEnum} from "../../enum/user.role.enum";
import {AuthService} from "../security/auth-service";

@Injectable({
  providedIn: 'root'
})
export class CurrentLoginService {
  private _currentLogin: LoginModel;
  private _isLoginAdmin: boolean = false;

  constructor(private loginService: LoginService,
              private auth: AuthService) { }

  public getCurrentLogin(): Subject<LoginModel> {
      const sbjLogin = new AsyncSubject<LoginModel>();
      if (!this._currentLogin) {
        this.loginService.getAuthorizedLogin()
          .subscribe(currentLogin => {
            this.setCurrentLogin(currentLogin);
            sbjLogin.next(currentLogin);
            sbjLogin.complete();
          });
      }
      else {
        sbjLogin.next(this._currentLogin);
        sbjLogin.complete();
      }
      return sbjLogin;
  }

  public setCurrentLogin (currentLogin: LoginModel) {
    this._isLoginAdmin = currentLogin.role == UserRoleEnum.ADMIN;
    this._currentLogin = currentLogin;
  }

  public clear(): void {
    this._isLoginAdmin = false;
    this._currentLogin = null;
  }

  get isLoginAdmin(): boolean {
    if (!this._currentLogin && this.auth.isAuthenticated()) this.getCurrentLogin();
    return this._isLoginAdmin;
  }


}
