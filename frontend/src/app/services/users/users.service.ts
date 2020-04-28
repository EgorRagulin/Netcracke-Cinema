import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/User";
import {Ticket} from "../../models/Ticket";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private rootPath = 'api/users/';

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.rootPath);
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.rootPath +
      '?id=' + id);
  }

  public getTickets(id: number): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.rootPath +
      'tickets/?id=' + id);
  }
}
