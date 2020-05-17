import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {TicketModel} from "../../../../models/ticket.model";
import {TicketsService} from "../../../../services/tickets/tickets.service";
import {Subscription} from "rxjs";
import {SessionsService} from "../../../../services/sessions/sessions.service";
import {ActivatedRoute} from "@angular/router";
import {SessionModel} from "../../../../models/session.model";
import {RowModel} from "../../../../models/row/row.model";
import {PlaceModel} from "../../../../models/place/place.model";
import {LoadingService} from "../../../../services/loading/loading.service";
import {FullTicketModel} from "../../../../models/full-models/full.ticket.model";
import {PlaceStatus} from "../../../../enum/place.status";
import {UserModel} from "../../../../models/user.model";
import {StorageService} from "../../../../services/security/storage.service";
import {LoginService} from "../../../../services/security/login-service";

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuyTicketComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public isLoading: boolean;

  public rows: RowModel[];

  private sessionId: number;

  public session: SessionModel;
  public user: UserModel;

  public selectedTickets: FullTicketModel[] = [];
  public updatedTickets: FullTicketModel[] = [];

  constructor(private ticketService: TicketsService,
              private sessionsService: SessionsService,
              private loginService: LoginService,
              private activateRoute: ActivatedRoute,
              private loadingService: LoadingService,
              private storageService: StorageService,
              private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.sessionId = this.activateRoute.snapshot.params['id'];
    this.getSession();
    this.getUser();
    this.getSessionTickets();

    this.rows = this.createRows(5, 10);

    setInterval(() => {
      this.getSessionTickets();
    }, 5000);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll();
  }

  private getSession(): void {
    this._subscriptions.push(this.sessionsService.getSessionById(this.sessionId)
      .subscribe(session => this.session = session));
  }

  private getUser() {
    const loginId = this.storageService.getCurrentLogin().id;

    this._subscriptions.push(this.loginService.getAuthorizedUser(loginId)
      .subscribe(user => this.user = user));
  }

  private getSessionTickets(): void {
    this._subscriptions.push(this.sessionsService.getFullTickets(this.sessionId)
      .subscribe(sessionTickets => {
        this.changePlacesStatus(sessionTickets);
      }));
  }

  private createRows(numberOfRow: number, numberOfPlaces: number): RowModel[] {
    let rows: RowModel[] = [];

    for (let rowNumber = 1; rowNumber <= numberOfRow; rowNumber++) {
      let places: PlaceModel[] = [];
      for (let placeNumber = 1; placeNumber <= numberOfPlaces; placeNumber++) {
        places.push(new PlaceModel(placeNumber, PlaceStatus.FREE));
      }
      rows.push(new RowModel(rowNumber, numberOfPlaces, places));
    }

    return rows;
  }

  private changePlacesStatus(sessionTickets: FullTicketModel[]) {
    if (sessionTickets.length > 0) {
      sessionTickets.forEach(ticket => {
        let place: PlaceModel = this.rows[ticket.rowNumber - 1].places[ticket.placeNumber - 1];
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

  private setPlaceStatus(ticket: FullTicketModel, status: PlaceStatus): void {
    let place = this.rows[ticket.rowNumber - 1].places[ticket.placeNumber - 1];
    if (place.placeStatus != status) {
      this.rows[ticket.rowNumber - 1].places[ticket.placeNumber - 1] = new PlaceModel(place.placeNumber, status);
    }
  }

  private isTicketUpdating(ticket: FullTicketModel) {
    return false;
  }

  private addTicketToSelectedTickets(selectedTicket: FullTicketModel): void {
    if (this.isTicketInSelectedTickets(selectedTicket)) this.selectedTickets.push(selectedTicket);
  }

  private isTicketInSelectedTickets(selectedTicket: FullTicketModel): boolean {
    return this.selectedTickets.filter(ticket => this.isTicketsEqual(ticket, selectedTicket)).length == 0;
  }

  public selectTicket(selectedPlace: TicketModel): void {
    let fullTicket: FullTicketModel = new FullTicketModel(selectedPlace.rowNumber, selectedPlace.placeNumber, false, 1, this.session, this.user);
    this.reserveTicket(fullTicket);
  }

  private reserveTicket(fullTicket: FullTicketModel): void {
    this.setPlaceStatus(fullTicket, PlaceStatus.UPDATED);
    this.ticketService.saveTicket(fullTicket).subscribe(ticket => {
      this.selectedTickets.push(ticket);
      this.setPlaceStatus(ticket, PlaceStatus.SELECTED);
    });
  }

  public buySelectedTickets(): void {
    this.selectedTickets.forEach(selectedFullTicket => {
        this.setPlaceStatus(selectedFullTicket, PlaceStatus.UPDATED);
        console.log(selectedFullTicket)
        selectedFullTicket.isSold = true;
        console.log(selectedFullTicket)
        this.ticketService.saveTicket(selectedFullTicket).subscribe(ticket => {
          this.setPlaceStatus(ticket, PlaceStatus.BOUGHT);
        });
      }
    );
    this.selectedTickets = [];
  }

  public unselectTicket(selectedPlace: FullTicketModel): void {
    let ticketsEqualSelected: FullTicketModel[] = this.selectedTickets.filter(ticket => this.isTicketsEqual(ticket, selectedPlace));
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

  private isTicketsEqual(ticket1: FullTicketModel, ticket2: FullTicketModel): boolean {
    return ticket1.rowNumber === ticket2.rowNumber && ticket1.placeNumber === ticket2.placeNumber;
  }

  private _unsubscribeAll() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
