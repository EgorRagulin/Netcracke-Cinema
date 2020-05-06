import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../../models/Ticket";
import {FullTicket} from "../../models/FullModel/FullTicket";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private rootPath = 'api/tickets';

  constructor(private http: HttpClient) { }

  public getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.rootPath);
  }

  public getTicketById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.rootPath + '/?id=' + id);
  }

  public getFullTicketById(id: number): Observable<FullTicket> {
    return this.http.get<FullTicket>(this.rootPath + '/full/?id=' + id);
  }

  public saveTicket(fullTicket: FullTicket): Observable<FullTicket> {
    return this.http.post<FullTicket>(this.rootPath, fullTicket);
  }

  public deleteTicket(id: number): Observable<any> {
    return this.http.delete<void>(this.rootPath + '/?id=' + id);
  }
}
