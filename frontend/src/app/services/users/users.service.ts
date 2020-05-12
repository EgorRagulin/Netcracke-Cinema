import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../../models/user.model";
import {Ticket} from "../../models/Ticket";

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

  public getTickets(id: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.rootPath +
      'tickets/?id=' + id);
  }
}
