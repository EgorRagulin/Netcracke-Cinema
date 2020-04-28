import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ticket} from "../../models/Ticket";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private rootPath = 'api/tickets/';

  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.rootPath);
  }

  getTicketById(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(this.rootPath +
      '?id=' + id);
  }

  saveTicket(uploadData: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(this.rootPath, uploadData);
  }

  deleteTicket(id: number): Observable<void> {
    return this.http.delete<void>(this.rootPath + 'id=' + id);
  }
}
