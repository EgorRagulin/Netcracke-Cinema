import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Session} from "../../models/Session";
import {FullTicket} from "../../models/full-models/FullTicket";

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  private rootPath = 'api/sessions';

  constructor(private http: HttpClient) { }

  public getSessions(): Observable<Session[]> {
    return this.http.get<Session[]>(this.rootPath);
  }

  public getSessionById(id: number): Observable<Session> {
    return this.http.get<Session>(this.rootPath + '/?id=' + id);
  }

  public getFullTickets(id: number): Observable<FullTicket[]> {
    return this.http.get<FullTicket[]>(this.rootPath + '/fullTickets/?id=' + id );
  }
}
