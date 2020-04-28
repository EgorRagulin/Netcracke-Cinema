import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/modules/material/material.module";

@NgModule({
  declarations: [PageNotFoundComponent],
  exports: [
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class PageNotFoundModule { }
