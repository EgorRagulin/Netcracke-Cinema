import {Injectable} from "@angular/core";
import {StorageLoginModel} from "../../models/storage/storage.login.model";
import {StorageUserModel} from "../../models/storage/storage.user.model";


@Injectable()
export class StorageService {

  private readonly TOKEN_KEY: string = "token";
  private readonly CURRENT_LOGIN: string = "currentLogin";
  private readonly CURRENT_USER: string = "currentUser";

  private currentLogin: StorageLoginModel;
  private currentUser: StorageUserModel;

  public setCurrentLogin(currentLogin: StorageLoginModel): void {
    this.currentLogin = currentLogin;
    localStorage.setItem(this.CURRENT_LOGIN, JSON.stringify(currentLogin));
  }

  public getCurrentLogin(): StorageLoginModel {
    return this.currentLogin || JSON.parse(localStorage.getItem(this.CURRENT_LOGIN));
  }

  public setCurrentUser(currentUser: StorageUserModel): void {
    this.currentUser = currentUser;
    localStorage.setItem(this.CURRENT_USER, JSON.stringify(currentUser));
  }

  public getCurrentUser(): StorageUserModel {
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
