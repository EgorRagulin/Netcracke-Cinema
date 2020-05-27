import { Injectable } from '@angular/core';
import {UserModel} from "../../models/user.model";
import {AsyncSubject, Subject} from "rxjs";
import {LoginService} from "../security/login-service";
import {CurrentLoginService} from "../current-login/current-login.service";

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  public _currentUser: UserModel

  constructor(private loginService: LoginService,
              private currentLoginService: CurrentLoginService) { }

  public getCurrentUser(): Subject<UserModel> {
      const sbjUser = new AsyncSubject<UserModel>();
      if (!this._currentUser) {
        this.currentLoginService.getCurrentLogin().subscribe(login =>
          this.loginService.getAuthorizedUser(login.id).subscribe(user => {
            this._currentUser = user;
            sbjUser.next(user);
            sbjUser.complete();
          }));
      } else {
        sbjUser.next(this._currentUser);
        sbjUser.complete();
      }
      return sbjUser;
  }

  public clear(): void {
    this._currentUser = null;
  }

  public setCurrentUser (currentUser: UserModel) {
    this._currentUser = currentUser;
  }
}
