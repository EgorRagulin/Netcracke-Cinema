import {Component, OnDestroy, OnInit} from '@angular/core';
import {Session} from "../../../../models/Session";
import {Subscription} from "rxjs";
import {Ticket} from "../../../../models/Ticket";
import {SessionsService} from "../../../../services/sessions/sessions.service";
import {ActivatedRoute} from "@angular/router";
import {TicketsService} from "../../../../services/tickets/tickets.service";
import {UsersService} from "../../../../services/users/users.service";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit, OnDestroy {
  public tickets: Ticket[];
  private _subscriptions: Subscription[] = [];


  constructor(private ticketsService: TicketsService,
              private usersService: UsersService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = this.activateRoute.snapshot.params['userId'];
    if (userId !== undefined) this.getTicketsByUser(userId);
    else this.getTickets();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getTicketsByUser(id: any) {
    this._subscriptions.push(this.usersService.getTickets(id)
      .subscribe(tickets => this.tickets = tickets));
  }

  private getTickets() {
    this._subscriptions.push(this.ticketsService.getTickets()
      .subscribe(tickets => this.tickets = tickets));
  }
}
