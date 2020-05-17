import {Injectable} from "@angular/core";
import {LoginModel} from "../../models/login.model";
import {UserModel} from "../../models/user.model";


@Injectable()
export class StorageService {

  private readonly TOKEN_KEY: string = "token";
  private readonly CURRENT_LOGIN: string = "currentLogin";
  private readonly CURRENT_USER: string = "currentUser";

  private currentLogin: LoginModel;
  private currentUser: UserModel;

  public setCurrentLogin(currentLogin: LoginModel): void {
    this.currentLogin = currentLogin;
    localStorage.setItem(this.CURRENT_LOGIN, JSON.stringify(currentLogin));
  }

  public getCurrentLogin(): LoginModel {
    return this.currentLogin || JSON.parse(localStorage.getItem(this.CURRENT_LOGIN));
  }

  public setCurrentUser(currentUser: UserModel): void {
    this.currentUser = currentUser;
    localStorage.setItem(this.CURRENT_USER, JSON.stringify(currentUser));
  }

  public getCurrentUser(): UserModel {
    return this.currentUser || JSON.parse(localStorage.getItem(this.CURRENT_USER));
  }

  public setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  public clearToken(): void {
    localStorage.setItem(this.TOKEN_KEY, null);
  }
}
