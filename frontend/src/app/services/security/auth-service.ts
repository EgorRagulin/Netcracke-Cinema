import {Injectable} from "@angular/core";
import {StorageService} from "./storage.service";
import {UserRoleEnum} from "../../enum/user.role.enum";
import {LoginService} from "./login-service";
import {LoginModel} from "../../models/login.model";
import {Router} from "@angular/router";

@Injectable({providedIn: "root"})
export class AuthService {
  private currentLogin: LoginModel;

  public isAdmin: boolean = false;

  constructor(private storageService: StorageService,
              private loginService: LoginService,
              private router: Router) {
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    return token && token !== "null" && !!this.storageService.getCurrentLogin();
  }

  public logout(): void {
    this.storageService.clearToken();
    this.storageService.setCurrentLogin(null);
    this.storageService.setCurrentUser(null);
    this.currentLogin = null;
    this.isAdmin = false;
  }

  public isLoginAdmin() {
    if (this.isAuthenticated()) this.isLoginRoleAdmin();
    else this.isAdmin = false;
  }

  private isLoginRoleAdmin(): void {
    let currentLogin: LoginModel = this.storageService.getCurrentLogin();
    if (this.currentLogin && this.currentLogin != null && this.currentLogin.id == currentLogin.id) {
      this.isAdmin = this.currentLogin.role == UserRoleEnum.ADMIN;
    }
    else {
      this.getAuthorizedLoginFromDB();
    }
  }

  private getAuthorizedLoginFromDB(): void {
    this.loginService.getAuthorizedLogin()
      .subscribe((currentLogin: LoginModel) => {
        this.currentLogin = currentLogin;
      }, error => {
        alert(error);
        this.logout();
        this.router.navigate(['sign-in']);
      });
  }
}
