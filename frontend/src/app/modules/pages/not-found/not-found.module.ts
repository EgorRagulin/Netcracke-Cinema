import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/modules/material/material.module";

@NgModule({
  declarations: [NotFoundComponent],
  exports: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class NotFoundModule { }
