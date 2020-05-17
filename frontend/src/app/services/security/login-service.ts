import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SecurityLoginModel} from "../../models/security/security.login.model";
import {StorageTokenModel} from "../../models/storage/storage.token.model";
import {LoginModel} from "../../models/login.model";
import {UserModel} from "../../models/user.model";


@Injectable()
export class LoginService {
  private rootPath = '/api/login';

  constructor(private http: HttpClient) {
  }

  public saveLogin(loginModel: LoginModel): Observable<LoginModel> {
    return this.http.post<LoginModel>(this.rootPath + "/sign-up", loginModel);
  }

  public generateToken(login: SecurityLoginModel): Observable<StorageTokenModel> {
    return this.http.post<StorageTokenModel>("/api/token/generate-token", login);
  }

  public getAuthorizedLogin(): Observable<LoginModel> {
    return this.http.get<LoginModel>(this.rootPath + "/current-login");
  }

  public getAuthorizedUser(loginId: number): Observable<UserModel> {
    return this.http.get<UserModel>(this.rootPath + "/user/?id=" + loginId);
  }

  public getUserByLoginId(loginId: number): Observable<UserModel> {
    return this.http.get<UserModel>(this.rootPath + "/user/?id=" + loginId);
  }
}
