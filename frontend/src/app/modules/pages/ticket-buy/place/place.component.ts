import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges, OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Place} from "../../../../models/place/Place";


@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
})
export class PlaceComponent implements OnChanges, OnInit {
  @Input() place: Place;
  @Output() selectPlaceEvent = new EventEmitter;
  @Output() unSelectPlaceEvent = new EventEmitter;

  public color: string;
  public placeNumber;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.place.isSold) this.color = 'red';
    else if (this.place.isSelected) this.color = 'green';
    else if (this.place.isReserved) this.color = 'orange';
    else this.color = 'white';
  }

  ngOnInit(): void {
    this.placeNumber = this.place.placeNumber;
  }

  public click(): void {
    if (!this.place.isSold) {
      if(this.place.isSelected) {
        this.unSelect();
        console.log('unselect');
      }
      else if (!this.place.isReserved) {
        this.select();
        console.log('select');
      }
      else console.log('reserved');
    }
    else console.log('sold');
  }

  private select() {
    this.selectPlaceEvent.emit(this.place.placeNumber);
    this.color = 'green';
  }

  private unSelect() {
    this.unSelectPlaceEvent.emit(this.place.placeNumber);
    this.color = 'white';
  }
}
