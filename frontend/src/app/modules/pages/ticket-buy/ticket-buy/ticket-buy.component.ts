import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ticket} from "../../../../models/Ticket";
import {TicketsService} from "../../../../services/tickets/tickets.service";
import {Subscription} from "rxjs";
import {SessionsService} from "../../../../services/sessions/sessions.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './ticket-buy.component.html',
  styleUrls: ['./ticket-buy.component.css']
})
export class TicketBuyComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  private _sessionId;
  public session;
  public rows: number[];
  public soldPlaces: boolean[][];

  public numberOfRow = 5;
  public placesInRow = 10;

  private _selectedTickets: Ticket[] = []

  constructor(private ticketService: TicketsService,
              private sessionsService: SessionsService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._sessionId = this.activateRoute.snapshot.params['id'];
    this.rows = this.getRows(this.numberOfRow);

    this.getSession(this._sessionId);
    this.getTickets(this._sessionId);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getRows(numberOfRow: number): number[] {
    let rows: number[] = [];
    for (let i = 1; i <= numberOfRow; i++) rows.push(i);
    return rows;
  }

  private getSoldPlaces(tickets: Ticket[]): boolean[][] {
    let soldPlaces: boolean[][] =  new Array(this.numberOfRow).fill(false)
                                                              .map(() => new Array(this.placesInRow)
                                                              .fill(false));
    tickets.forEach(ticket => soldPlaces[ticket.rowNumber-1][ticket.placeNumber-1] = true);
    return soldPlaces;
  }

  private getTickets(id: number) {
    this._subscriptions
      .push(this.sessionsService.getTickets(id)
      .subscribe(tickets => this.soldPlaces = this.getSoldPlaces(tickets)));
  }

  private getSession(id: number) {
    this._subscriptions
      .push(this.sessionsService.getSessionById(id)
        .subscribe(session => this.session = session ));
  }

  public selectTicket(selectedTicket: Ticket): void {
    let filteredTickets = this._selectedTickets.filter(ticket => !this.compareTickets(ticket, selectedTicket));
    if (filteredTickets.length === this._selectedTickets.length) this._selectedTickets.push(selectedTicket);
    else this._selectedTickets = filteredTickets;
  }

  private compareTickets(ticket1: Ticket, ticket2: Ticket): boolean {
    if (ticket1.rowNumber === ticket2.rowNumber &&
        ticket1.placeNumber === ticket2.placeNumber) return true;
    else return false;
  }

  public buyTickets() {
    this._selectedTickets
      .forEach(selectedTicket => this._subscriptions.push(this.ticketService.saveTicket(selectedTicket)
                                                    .subscribe(() => this.getTickets(this._sessionId))));
  }
}
