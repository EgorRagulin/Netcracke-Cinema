import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
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
import {CurrentUserService} from "../../../../services/current-user/current.user.service";
import {finalize} from "rxjs/operators";
import {CurrentWalletService} from "../../../../services/current-wallet/current-wallet.service";

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
  public totalCost: number = 0;

  constructor(private ticketService: TicketsService,
              private sessionsService: SessionsService,

              private currentUserService: CurrentUserService,
              private currentWalletService: CurrentWalletService,

              private loadingService: LoadingService,

              private activateRoute: ActivatedRoute,
              private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);
    this.sessionId = this.activateRoute.snapshot.params['id'];
    this.getUser();
    this.getSession();

    this.rows = this.createRows(5, 10);

    setInterval(() => {
      this.getSessionTickets();
    }, 2000);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll();
  }

  private getSession(): void {
    this._subscriptions.push(this.sessionsService.getSessionById(this.sessionId)
      .subscribe(session => this.session = session));
  }

  private getUser() {
    this._subscriptions.push(this.currentUserService.getCurrentUser()
      .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
      .subscribe(user => {
        this.user = user;
        this.getSessionTickets();
      }));
  }

  private getSessionTickets(): void {
    this._subscriptions.push(this.sessionsService.getFullTickets(this.sessionId)
      .subscribe(sessionTickets => this.changePlacesStatus(sessionTickets)));
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
    if (sessionTickets.length > 0 && this.user) {
      sessionTickets.forEach(ticket => {
        let place: PlaceModel = this.rows[ticket.rowNumber - 1].places[ticket.placeNumber - 1];
        //isSold
        if (ticket.isSold) {
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

  private addTicketToSelectedTickets(selectedTicket: FullTicketModel): void {
    if (this.isTicketInSelectedTickets(selectedTicket)) {
      this.selectedTickets.push(selectedTicket);
      this.updateTotalCost();
    }
  }

  private isTicketInSelectedTickets(selectedTicket: FullTicketModel): boolean {
    return this.selectedTickets.filter(ticket => this.isTicketsEqual(ticket, selectedTicket)).length == 0;
  }

  public selectTicket(selectedPlace: TicketModel): void {
    let fullTicket: FullTicketModel = new FullTicketModel(selectedPlace.rowNumber, selectedPlace.placeNumber, false, this.session, this.user);
    this.reserveTicket(fullTicket);
    this.updateTotalCost();
  }

  private reserveTicket(fullTicket: FullTicketModel): void {
    this.setPlaceStatus(fullTicket, PlaceStatus.UPDATED);
    this.ticketService.saveTicket(fullTicket).subscribe(ticket => {
      this.selectedTickets.push(ticket);
      this.setPlaceStatus(ticket, PlaceStatus.SELECTED);
      this.cd.detectChanges();
      this.updateTotalCost();
    });
  }

  public buySelectedTickets(): void {
    this.updateTotalCost();

    this._subscriptions.push(this.currentWalletService.pay(this.totalCost)
      .subscribe(res => {
        if(res) {
          this.selectedTickets.forEach(selectedFullTicket => {
              this.setPlaceStatus(selectedFullTicket, PlaceStatus.UPDATED);
              selectedFullTicket.isSold = true;
              this.ticketService.saveTicket(selectedFullTicket).subscribe(ticket => {
                this.setPlaceStatus(ticket, PlaceStatus.BOUGHT);
                this.cd.detectChanges();
              });
            }
          );
          this.selectedTickets = [];
          this.updateTotalCost();
        }
      }))
  }

  public unselectTicket(selectedPlace: FullTicketModel): void {
    let ticketsEqualSelected: FullTicketModel[] = this.selectedTickets.filter(ticket => this.isTicketsEqual(ticket, selectedPlace));
    if (ticketsEqualSelected.length > 0) ticketsEqualSelected.forEach(ticket => {
      this.ticketService.deleteTicket(ticket.id).subscribe();
      this.setPlaceStatus(ticket, PlaceStatus.FREE);
    });
    this.selectedTickets = this.selectedTickets.filter(ticket => !this.isTicketsEqual(ticket, selectedPlace));
    this.updateTotalCost();
  }

  public deleteSelectedTickets(): void {
    this.selectedTickets.forEach(ticket => {
      this.ticketService.deleteTicket(ticket.id).subscribe();
      this.setPlaceStatus(ticket, PlaceStatus.FREE);
    });
    this.selectedTickets = [];
    this.updateTotalCost();
  }

  private isTicketsEqual(ticket1: FullTicketModel, ticket2: FullTicketModel): boolean {
    return ticket1.rowNumber === ticket2.rowNumber && ticket1.placeNumber === ticket2.placeNumber;
  }

  private updateTotalCost(): void {
    if (this.session && this.selectedTickets && this.selectedTickets.length > 0) this.totalCost = this.selectedTickets.length * this.session.cost;
    else this.totalCost = 0;
  }

  private _unsubscribeAll() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
