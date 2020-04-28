import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnChanges {
  @Input() placeNumber: number;
  @Input() isSold: boolean;
  @Output() selectTicketEvent = new EventEmitter;

  public color: string = 'white';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isSold) this.color = 'red';
  }

  public click(): void {
    if (!this.isSold) {
      if (this.color === 'white') {
        this.color = 'green';
      }
      else {
        this.color = 'white';
      }
      this.selectTicketEvent.emit()
    }
  }
}
