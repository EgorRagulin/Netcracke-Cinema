import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../../models/user.model";
import {TicketModel} from "../../models/ticket.model";
import {FullUserModel} from "../../models/full-models/full.user.model";
import {WalletModel} from "../../models/wallet.model";
import {CompleteTicket} from "../../models/complete-ticket/complete.ticket";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private rootPath = 'api/users/';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.rootPath);
  }

  public getUserById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(this.rootPath +
      '?id=' + id);
  }

  public saveUserInDb(fullUser: FullUserModel): Observable<FullUserModel>  {
    return this.http.post<FullUserModel>(this.rootPath, fullUser);
  }

  public getWalletByUserId(userId: number): Observable<WalletModel> {
    return this.http.get<WalletModel>(this.rootPath +
      'wallet/?id=' + userId);
  }

  public getCompleteTicketsByUserId(userId: number): Observable<CompleteTicket[]> {
    return this.http.get<CompleteTicket[]>(this.rootPath +
      'complete-tickets/?userId=' + userId);
  }
}
