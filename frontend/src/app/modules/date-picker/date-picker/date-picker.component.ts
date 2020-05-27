import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ThemePalette} from "@angular/material/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {
  @Output() selectDateTimeEvent = new EventEmitter();
  public disabled = false;
  public defaultTime;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public minDate: Date;
  public maxDate: Date;
  public stepHour = 1;
  public stepMinute = 5;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';
  public disableMinute = false;
  public hideTime = false;

  public dateControl = new FormControl(new Date().getDate());
  constructor() { }

  ngOnInit() {
    this._setMinDate();
    this._setMaxDate();
    this._setDefaultTime();
  }

  private _setDefaultTime() {
    const now: Date = new Date();
    this.defaultTime = [now.getHours() + 1, 0, 0];
  }

  private _setMinDate() {
    let now = new Date();
    this.minDate = new Date();
    this.minDate.setDate(now.getDate() + 1);
  }

  private _setMaxDate() {
    const now: Date = new Date();
    this.maxDate = new Date();
    this.maxDate.setDate(now.getDate() + 8);
  }

  public selectDate(): void {
    let selectedDate: Date = this.dateControl.value;
    this.selectDateTimeEvent.emit(selectedDate);
  }
}
