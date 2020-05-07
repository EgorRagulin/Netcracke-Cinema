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
import {PlaceStatus} from "../../../../enum/PlaceStatus";

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
  private userId: number;

  public session: Session;
  public user = {id:1,firstName:"1",secondName:"1",role:"1"};

  public selectedTickets: FullTicket[] = [];
  public updateTickets: FullTicket[] = [];

  constructor(private ticketService: TicketsService,
              private sessionsService: SessionsService,
              private UsersService: UsersService,
              private activateRoute: ActivatedRoute,
              private loadingService: LoadingService,
              private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.sessionId = this.activateRoute.snapshot.params['id'];
    this.userId = 1;
    this.getSession();
    this.getUser(this.userId);
    this.getSessionTickets();

    this.rows = this.createRows(5, 10);

    setInterval(() => {
      this.getSessionTickets();
    }, 20000);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll();
  }

  private getSession(): void {
    this._subscriptions.push(this.sessionsService.getSessionById(this.sessionId).subscribe(session => this.session = session));
  }

  private getUser(userId: number) {
    this._subscriptions.push(this.UsersService.getUserById(userId).subscribe(user => this.user = user));
  }

  private getSessionTickets(): void {
    this._subscriptions.push(this.sessionsService.getFullTickets(this.sessionId).subscribe(sessionTickets => {
        this.changePlacesStatus(sessionTickets);
      }));
  }

  private createRows(numberOfRow: number, numberOfPlaces: number): Row[] {
    let rows: Row[] = [];

    for (let rowNumber = 1; rowNumber <= numberOfRow; rowNumber++) {
      let places: Place[] = [];
      for (let placeNumber = 1; placeNumber <= numberOfPlaces; placeNumber++) {
        places.push(new Place(placeNumber, PlaceStatus.FREE));
      }
      rows.push(new Row(rowNumber, numberOfPlaces, places));
    }

    return rows;
  }

  private changePlacesStatus(sessionTickets: FullTicket[]) {
    if (sessionTickets.length > 0) {
      sessionTickets.forEach(ticket => {
        let place: Place = this.rows[ticket.rowNumber - 1].places[ticket.placeNumber - 1];
        //isReserved
        if (this.isTicketUpdating(ticket)) this.setPlaceStatus(ticket, PlaceStatus.UPDATED);
        //isSold
        else if (ticket.isSold) {
          if (ticket.user.id == this.user.id) {
              this.setPlaceStatus(ticket, PlaceStatus.BOUGHT);
          }
          else this.setPlaceStatus(ticket, PlaceStatus.SOLD);
        }
        //!isSold
        else if (ticket.user.id == this.user.id) {
          if (place.placeStatus != PlaceStatus.SELECTED) {
            this.setPlaceStatus(ticket, PlaceStatus.SELECTED);
            this.addTicketToSelectedTickets(ticket);
          }
        }
        else this.setPlaceStatus(ticket, PlaceStatus.RESERVED);
      });
    }
    this.cd.detectChanges();
  }

  private setPlaceStatus(ticket: FullTicket, status: PlaceStatus): void {
    let place = this.rows[ticket.rowNumber - 1].places[ticket.placeNumber - 1];
    if (place.placeStatus != status) {
      this.rows[ticket.rowNumber - 1].places[ticket.placeNumber - 1] = new Place(place.placeNumber, status);
    }
  }

  private isTicketUpdating(ticket: FullTicket) {
    return false;
  }

  private addTicketToSelectedTickets(selectedTicket: FullTicket): void {
    if (this.isTicketInSelectedTickets(selectedTicket)) this.selectedTickets.push(selectedTicket);
  }

  private isTicketInSelectedTickets(selectedTicket: FullTicket): boolean {
    return this.selectedTickets.filter(ticket => this.isTicketsEqual(ticket, selectedTicket)).length == 0;
  }

  public selectTicket(selectedPlace: Ticket): void {
    let fullTicket: FullTicket = new FullTicket(selectedPlace.rowNumber, selectedPlace.placeNumber, false, 1, this.session, this.user);
    this.reserveTicket(fullTicket);
  }

  private reserveTicket(fullTicket: FullTicket): void {
    this.setPlaceStatus(fullTicket, PlaceStatus.UPDATED);
    this.ticketService.saveTicket(fullTicket).subscribe(ticket => {
      this.selectedTickets.push(ticket);
      this.setPlaceStatus(ticket, PlaceStatus.SELECTED);
    });
  }

  public buySelectedTickets(): void {
    this.selectedTickets.forEach(selectedFullTicket => {
        this.setPlaceStatus(selectedFullTicket, PlaceStatus.UPDATED);
        selectedFullTicket.isSold = true;
        this.ticketService.saveTicket(selectedFullTicket).subscribe(ticket => {
          this.setPlaceStatus(ticket, PlaceStatus.BOUGHT);
        });
      }
    );
    this.selectedTickets = [];
  }

  public unselectTicket(selectedPlace: FullTicket): void {
    let ticketsEqualSelected: FullTicket[] = this.selectedTickets.filter(ticket => this.isTicketsEqual(ticket, selectedPlace));
    if (ticketsEqualSelected.length > 0) ticketsEqualSelected.forEach(ticket => {
      this.ticketService.deleteTicket(ticket.id).subscribe();
      this.setPlaceStatus(ticket, PlaceStatus.FREE);
    });
    this.selectedTickets = this.selectedTickets.filter(ticket => !this.isTicketsEqual(ticket, selectedPlace));
  }

  public deleteSelectedTickets(): void {
    this.selectedTickets.forEach(ticket => {
      this.ticketService.deleteTicket(ticket.id).subscribe();
      this.setPlaceStatus(ticket, PlaceStatus.FREE);
    });
    this.selectedTickets = [];
  }

  private isTicketsEqual(ticket1: FullTicket, ticket2: FullTicket): boolean {
    return ticket1.rowNumber === ticket2.rowNumber && ticket1.placeNumber === ticket2.placeNumber;
  }

  private _unsubscribeAll() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
