import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SessionModel} from "../../models/session.model";
import {FullTicketModel} from "../../models/full-models/full.ticket.model";
import {FullSessionModel} from "../../models/full-models/full.session.model";

@Injectable({
  providedIn: 'root'
})
export class SessionsService {
  private rootPath = 'api/sessions';

  constructor(private http: HttpClient) { }

  public getSessions(): Observable<SessionModel[]> {
    return this.http.get<SessionModel[]>(this.rootPath);
  }

  public getSessionById(id: number): Observable<SessionModel> {
    return this.http.get<SessionModel>(this.rootPath + '/?id=' + id);
  }

  public getFullTickets(id: number): Observable<FullTicketModel[]> {
    return this.http.get<FullTicketModel[]>(this.rootPath + '/fullTickets/?id=' + id );
  }

  public saveSessionInDb(fullSession: FullSessionModel): Observable<FullSessionModel> {
    return this.http.post<FullSessionModel>(this.rootPath, fullSession);
  }
}
