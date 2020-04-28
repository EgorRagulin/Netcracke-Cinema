import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ticket} from "../../../../models/Ticket";
import {Session} from "../../../../models/Session";
import {User} from "../../../../models/User";

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
  @Input() public rowNumber: number;
  @Input() public placeInRow: number;
  @Input() public soldPlacesInRow: boolean[];
  @Input() private _session: Session;
  @Output() buyTicketEvent = new EventEmitter;
  public places;

  constructor() { }

  ngOnInit(): void {
    this.places = this.getPlaces(this.placeInRow);
  }

  private getPlaces(placeInRow: number): number[] {
    let places: number[] = [];
    for (let i = 1; i <= placeInRow; i++) places.push(i);
    return places;
  }

  public createTicket(placeNumber: number) {
    const ticket = new Ticket(this.rowNumber, placeNumber,1, this._session, this.getUser());
    this.buyTicketEvent.emit(ticket);
  }

  private getUser(): User {
    return new User(1, "1", "1", "1");
  }
}
