import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Ticket} from "../../../../models/Ticket";
import {TicketsService} from "../../../../services/tickets/tickets.service";
import {Subscription} from "rxjs";
import {SessionsService} from "../../../../services/sessions/sessions.service";
import {ActivatedRoute} from "@angular/router";
import {Session} from "../../../../models/Session";
import {Row} from "../../../../models/row/Row";
import {Place} from "../../../../models/place/Place";
import {LoadingService} from "../../../../services/loading/loading.service";
import {FullTicket} from "../../../../models/FullModel/FullTicket";
import {UsersService} from "../../../../services/users/users.service";

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './ticket-buy.component.html',
  styleUrls: ['./ticket-buy.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketBuyComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public isLoading: boolean;

  public rows: Row[];

  private sessionId: number;
  public session: Session;
  public user = {id:1,firstName:"1",secondName:"1",role:"1"};

  private sessionFullTickets: FullTicket[] = [];
  public selectedFullTickets: FullTicket[] = [];
  public boughtFullTickets: FullTicket[] = [];


  constructor(private ticketService: TicketsService,
              private sessionsService: SessionsService,
              private UsersService: UsersService,
              private activateRoute: ActivatedRoute,
              private loadingService: LoadingService,
              private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.sessionId = this.activateRoute.snapshot.params['id'];
    this.getSession();
    this.getUser(1);
    this.getFullTickets();

    this.rows = this.createRows(5, 10);

    setInterval(() => {
      this.getFullTickets();
    }, 20000);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll();
    this.deleteSelectedTickets();
  }

  private getSession(): void {
    this._subscriptions.push(this.sessionsService.getSessionById(this.sessionId).subscribe(session => this.session = session));
  }

  private getUser(userId: number) {
    this._subscriptions.push(this.UsersService.getUserById(userId).subscribe(user => this.user = user));
  }

  private getFullTickets(): void {
    this._subscriptions.push(this.sessionsService.getFullTickets(this.sessionId).subscribe(sessionFullTickets => {
        this.sessionFullTickets = sessionFullTickets;
        this.setPlacesStates();
      }));
  }

  private createRows(numberOfRow: number, numberOfPlaces: number): Row[] {
    let rows: Row[] = [];

    for (let rowNumber = 1; rowNumber <= numberOfRow; rowNumber++) {
      let places: Place[] = [];
      for (let placeNumber = 1; placeNumber <= numberOfPlaces; placeNumber++) {
        places.push(new Place(placeNumber, false, false, false));
      }
      rows.push(new Row(rowNumber, numberOfPlaces, places));
    }

    return rows;
  }

  private setPlacesStates() {
    if (this.sessionFullTickets.length > 0) {
      this.sessionFullTickets.forEach(ticket => {
        let place: Place = this.rows[ticket.rowNumber - 1].places[ticket.placeNumber - 1];
        if (ticket.isSold) {
          if (!place.isSold) {
            this.rows[ticket.rowNumber - 1].places[ticket.placeNumber - 1] = new Place(place.placeNumber, true, false, false);
          }
        }
        else if (ticket.user.id == this.user.id) {
          if (!place.isSelected) {
            this.rows[ticket.rowNumber - 1].places[ticket.placeNumber - 1] = new Place(place.placeNumber, false, false, true);
          }
        }
        else if (!place.isReserved){
          this.rows[ticket.rowNumber - 1].places[ticket.placeNumber - 1] = new Place(place.placeNumber, false, true, false);
        }
      });
    }
    this.cd.detectChanges();
  }

  public selectTicket(selectedTicket: Ticket): void {
    let ticketEqualSelected: FullTicket[] = this.selectedFullTickets.filter(ticket => this.isTicketsEqual(ticket, selectedTicket));

    if (ticketEqualSelected.length > 0) {
      ticketEqualSelected.forEach(ticket => this.ticketService.deleteTicket(ticket.id).subscribe());
    }

    let fullTicket: FullTicket = new FullTicket(selectedTicket.rowNumber, selectedTicket.placeNumber, false, 1, this.session, this.user);
    this.reserveTicket(fullTicket);
  }

  private reserveTicket(fullTicket: FullTicket): void {
    this.ticketService.saveTicket(fullTicket).subscribe(fullTicket => {
      this.selectedFullTickets.push(fullTicket)
    });
  }

  public unSelectTicket(selectedTicket: Ticket): void {
    let ticketsEqualSelected: FullTicket[] = this.selectedFullTickets.filter(ticket => this.isTicketsEqual(ticket, selectedTicket));

    if (ticketsEqualSelected.length > 0) ticketsEqualSelected.forEach(ticket => this.ticketService.deleteTicket(ticket.id).subscribe());

    this.selectedFullTickets = this.selectedFullTickets.filter(ticket => !this.isTicketsEqual(ticket, selectedTicket));
  }

  public buySelectedTickets(): void {
    this.selectedFullTickets.forEach(selectedFullTicket => {
        selectedFullTicket.isSold = true;
        this.ticketService.saveTicket(selectedFullTicket).subscribe(fullTicket => this.boughtFullTickets.push(fullTicket));
      }
    );

    this.clearSelectedTickets();
  }

  private deleteSelectedTickets(): void {
    this.selectedFullTickets.forEach(ticket => {
      this.ticketService.deleteTicket(ticket.id).subscribe();
    });

    this.selectedFullTickets = [];
  }

  private clearSelectedTickets(): void {
    this.selectedFullTickets.forEach(ticket => {
      this.rows[ticket.rowNumber - 1].places[ticket.placeNumber - 1].isSelected = false;
    });

    this.selectedFullTickets = [];
  }

  private isTicketsEqual(ticket1: Ticket, ticket2: Ticket): boolean {
    return ticket1.rowNumber === ticket2.rowNumber && ticket1.placeNumber === ticket2.placeNumber;
  }

  private _unsubscribeAll() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
