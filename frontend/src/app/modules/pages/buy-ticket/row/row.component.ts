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
  @Input() rowNumber: number;
  @Input() placeInRow: number;
  @Output() buyTicketEvent = new EventEmitter;
  public places;

  constructor() { }

  ngOnInit(): void {
    this.places = this.getPlaces(this.placeInRow)
  }

  private getPlaces(placeInRow: number): number[] {
    let places: number[] = [];
    for (let i = 1; i <= placeInRow; i++) places.push(i);
    return places;
  }

  showPlaceInfo(placeNumber: number) {
    let user = new User(1, "1", "1", "1");
    let session = new Session(1, "1970-01-01", "01:00:00", "1")
    const ticket = new Ticket(this.rowNumber, placeNumber,1, session, user);
    ticket.id = 1;
    let ticket2 =
    {
      "rowNumber": 1,
      "placeNumber": 1,
      "cost": 1.0,
      "session": {
      "id": 1,
        "date": "1970-01-01",
        "time": "01:00:00",
        "mode": "1"
    },
      "user": {
      "id": 1,
        "firstName": "1",
        "secondName": "1",
        "role": "1"
    }
    }
    console.log(ticket);
    console.log(ticket2);
    this.buyTicketEvent.emit(ticket2);
  }
}
