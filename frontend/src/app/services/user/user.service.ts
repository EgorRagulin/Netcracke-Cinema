import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../../models/Ticket";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private rootPath = 'api/user/';

  constructor(private http: HttpClient) { }

  getUserById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.rootPath +
      '?id=' + id);
  }
}
