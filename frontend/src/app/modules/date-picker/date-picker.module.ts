import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker/date-picker.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMatDatetimePickerModule, NgxMatTimepickerModule} from "@angular-material-components/datetime-picker";
import {MaterialModule} from "../material/material.module";
import {MatDatepickerModule} from "@angular/material/datepicker";



@NgModule({
    declarations: [DatePickerComponent],
    exports: [
        DatePickerComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgxMatTimepickerModule,
        NgxMatDatetimePickerModule,
        MaterialModule,
        MatDatepickerModule,
        ReactiveFormsModule
    ]
})
export class DatePickerModule { }
