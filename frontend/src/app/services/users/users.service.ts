import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../../models/user.model";
import {TicketModel} from "../../models/ticket.model";
import {FullUserModel} from "../../models/full-models/full.user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
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

  public getTickets(id: number): Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(this.rootPath +
      'tickets/?id=' + id);
  }
}
