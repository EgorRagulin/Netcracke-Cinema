import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SecurityLoginModel} from "../../models/security/security.login.model";
import {StorageTokenModel} from "../../models/storage/storage.token.model";
import {StorageLoginModel} from "../../models/storage/storage.login.model";
import {StorageUserModel} from "../../models/storage/storage.user.model";
import {LoginModel} from "../../models/login.model";


@Injectable()
export class LoginService {
  private rootPath = '/api/login';

  constructor(private http: HttpClient) {
  }

  public generateToken(login: SecurityLoginModel): Observable<StorageTokenModel> {
    return this.http.post<StorageTokenModel>("/api/token/generate-token", login);
  }

  public getAuthorizedLogin(): Observable<StorageLoginModel> {
    return this.http.get<StorageLoginModel>(this.rootPath + "/current");
  }

  public getAuthorizedUser(loginId: number): Observable<StorageUserModel> {
    return this.http.get<StorageUserModel>(this.rootPath + "/user/?id" + loginId);
  }

  public saveLogin(loginModel: LoginModel): Observable<LoginModel> {
    return this.http.post<LoginModel>(this.rootPath + "/sign-up", loginModel);
  }
}
