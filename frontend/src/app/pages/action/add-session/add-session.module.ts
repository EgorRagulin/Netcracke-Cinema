import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSessionComponent } from './add-session/add-session.component';
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../../modules/material/material.module";
import {DatePickerModule} from "../../../modules/date-picker/date-picker.module";



@NgModule({
  declarations: [AddSessionComponent],
  exports: [
    AddSessionComponent
  ],
    imports: [
        CommonModule,
        LoadingPageModule,
        ReactiveFormsModule,
        MaterialModule,
        DatePickerModule
    ]
})
export class AddSessionModule { }
