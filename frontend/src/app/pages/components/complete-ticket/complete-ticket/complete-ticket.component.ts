import {Component, Input, OnInit} from '@angular/core';
import {CompleteTicket} from "../../../../models/complete-ticket/complete.ticket";

@Component({
  selector: 'app-complete-ticket',
  templateUrl: './complete-ticket.component.html',
  styleUrls: ['./complete-ticket.component.css']
})
export class CompleteTicketComponent implements OnInit {
  @Input() ticket: CompleteTicket;

  constructor() { }

  ngOnInit(): void {
  }
}
