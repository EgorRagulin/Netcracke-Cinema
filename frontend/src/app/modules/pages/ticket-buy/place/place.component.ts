import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Place} from "../../../../models/place/Place";
import {PlaceStatus} from "../../../../enum/PlaceStatus";


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
  public isButtonDisabled: boolean = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    switch (this.place.placeStatus) {
      case PlaceStatus.SOLD:
        this.color = 'red';
        this.isButtonDisabled = true;
        break;
      case PlaceStatus.RESERVED:
        this.color = 'orange';
        this.isButtonDisabled = true;
        break;
      case PlaceStatus.BOUGHT:
        this.color = 'yellow';
        this.isButtonDisabled = true;
        break;
      case PlaceStatus.SELECTED:
        this.color = 'green';
        this.isButtonDisabled = false;
        break;
      case PlaceStatus.UPDATED:
        this.color = 'blue';
        this.isButtonDisabled = true;
        break;
      case PlaceStatus.FREE:
        this.color = 'white';
        this.isButtonDisabled = false;
        break;
    }
  }

  ngOnInit(): void {
    this.placeNumber = this.place.placeNumber;
  }

  public click(): void {
    switch (this.place.placeStatus) {
      case PlaceStatus.SELECTED:
        this.unSelect();
        break;
      case PlaceStatus.FREE:
        this.select();
        break;
    }
  }

  private select() {
    console.log('select');
    this.color = 'blue';
    this.isButtonDisabled = true;
    this.selectPlaceEvent.emit(this.place.placeNumber);
  }

  private unSelect() {
    console.log('unselect');
    this.color = 'blue';
    this.isButtonDisabled = true;
    this.unSelectPlaceEvent.emit(this.place.placeNumber);
  }
}
