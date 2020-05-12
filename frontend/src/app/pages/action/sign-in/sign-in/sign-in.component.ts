import { Component, OnInit } from '@angular/core';
import {SecurityLoginModel} from "../../../../models/security/security.login.model";
import {StorageService} from "../../../../services/security/storage.service";
import {LoginService} from "../../../../services/security/login-service";
import {LoadingService} from "../../../../services/loading/loading.service";
import {StorageLoginModel} from "../../../../models/storage/storage.login.model";
import {StorageTokenModel} from "../../../../models/storage/storage.token.model";
import {Router} from "@angular/router";
import {StorageUserModel} from "../../../../models/storage/storage.user.model";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  public loginModel: SecurityLoginModel = {};
  public showCheckYourSetDataAlert: boolean = false;
  public isLoading: boolean = false;

  constructor(private loadingService: LoadingService,
              private router: Router,
              public storageService: StorageService,
              private loginService: LoginService) { }

  ngOnInit(): void {
  }

  private setTokenToStorage(): void {
    this.loginService.generateToken(this.loginModel)
      .subscribe((authToken: StorageTokenModel) => {
        if (authToken.token) {
          this.storageService.setToken(authToken.token);
          this.setCurrentLoginToStorage();
        }
      }, (error) => {
        if (error.status === 401) {
          this.showCheckYourSetDataAlert = true;
        } else {
          alert(error.message);
        }
      });
  }

  private setCurrentLoginToStorage(): void {
    this.loginService.getAuthorizedLogin()
      .subscribe((currentLogin: StorageLoginModel) => {
        this.storageService.setCurrentLogin(currentLogin);
        this.setCurrentUserToStorage(currentLogin.id);
      }, (error) => alert(error.message));
  }

  private setCurrentUserToStorage(loginId: number): void {
    if(loginId != NaN) {
        this.loginService.getAuthorizedUser(loginId)
          .subscribe((currentUser: StorageUserModel) => {
            this.storageService.setCurrentUser(currentUser);
            this.router.navigate(['my-profile']);
            this.isLoading = this.loadingService.changeLoadingStatus(false);
          }, (error) => {
            if (error.status === 400) {
              alert("UserModel not found!");
              this.router.navigate(['create-user']);
            } else {
              alert(error.message);
            }
          });
    }
    else alert("Что-то пошло не так!")
  }

  public singIn(): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this.setTokenToStorage();
  }
}
