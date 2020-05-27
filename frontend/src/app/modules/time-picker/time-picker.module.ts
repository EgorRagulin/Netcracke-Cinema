import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerComponent } from './time-picker/time-picker.component';
import {NgxMatTimepickerModule} from "@angular-material-components/datetime-picker";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [TimePickerComponent],
  imports: [
    CommonModule,
    NgxMatTimepickerModule,
    FormsModule
  ]
})
export class TimePickerModule { }
