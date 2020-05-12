import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Row } from 'src/app/models/row/Row';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
})
export class RowComponent implements OnInit {
  @Input() row: Row;
  @Output() selectRowEvent = new EventEmitter;
  @Output() unSelectRowEvent = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  public selectPlace(placeNumber: number) {
    let place = {
      placeNumber: placeNumber,
      rowNumber: this.row.rowNumber
    }
    this.selectRowEvent.emit(place);
  }

  public unSelectPlace(placeNumber: number) {
    let place = {
      placeNumber: placeNumber,
      rowNumber: this.row.rowNumber
    }
    this.unSelectRowEvent.emit(place);
  }
}
