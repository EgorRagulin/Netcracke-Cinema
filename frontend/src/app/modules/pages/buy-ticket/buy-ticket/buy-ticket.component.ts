import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ticket} from "../../../../models/Ticket";
import {TicketService} from "../../../../services/ticket/ticket.service";
import {Subscription} from "rxjs";
import {userError} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  private _numberOfRow = 5;
  public rows;
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.rows = this.getRows(this._numberOfRow)
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  getRows(numberOfRow: number): number[] {
    let rows: number[] = [];
    for (let i = 1; i <= numberOfRow; i++) rows.push(i);
    return rows;
  }

  buyTicket(ticket: Ticket) {
    this._subscriptions.push(this.ticketService.saveTicket(ticket)
      .subscribe(ticket => console.log(ticket)));
  }
}
