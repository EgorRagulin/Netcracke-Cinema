import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationComponent } from './form-validation/form-validation.component';
import {MaterialModule} from "../../../modules/material/material.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [FormValidationComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FormValidationModule { }
