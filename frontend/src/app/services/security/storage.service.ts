import {Injectable} from "@angular/core";
import {LoginModel} from "../../models/login.model";


@Injectable()
export class StorageService {

  private readonly TOKEN_KEY: string = "token";
  private readonly CURRENT_LOGIN: string = "currentLogin";

  private currentLogin: LoginModel;

  public setCurrentLogin(currentLogin: LoginModel): void {
    this.currentLogin = currentLogin;
    localStorage.setItem(this.CURRENT_LOGIN, JSON.stringify(currentLogin));
  }

  public getCurrentLogin(): LoginModel {
    return this.currentLogin || JSON.parse(localStorage.getItem(this.CURRENT_LOGIN));
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

  public clear(): void {
    this.clearToken();
    this.setCurrentLogin(null);
  }
}
