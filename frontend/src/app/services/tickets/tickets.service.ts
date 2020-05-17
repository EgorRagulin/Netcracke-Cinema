import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TicketModel} from "../../models/ticket.model";
import {FullTicketModel} from "../../models/full-models/full.ticket.model";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private rootPath = 'api/tickets';

  constructor(private http: HttpClient) { }

  public getTickets(): Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(this.rootPath);
  }

  public getTicketById(id: number): Observable<TicketModel> {
    return this.http.get<TicketModel>(this.rootPath + '/?id=' + id);
  }

  public getFullTicketById(id: number): Observable<FullTicketModel> {
    return this.http.get<FullTicketModel>(this.rootPath + '/full/?id=' + id);
  }

  public saveTicket(fullTicket: FullTicketModel): Observable<FullTicketModel> {
    return this.http.post<FullTicketModel>(this.rootPath, fullTicket);
  }

  public deleteTicket(id: number): Observable<any> {
    return this.http.delete<void>(this.rootPath + '/?id=' + id);
  }
}
