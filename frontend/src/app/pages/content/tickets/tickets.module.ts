import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import {RouterModule} from "@angular/router";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";
import {MaterialModule} from "../../../modules/material/material.module";


@NgModule({
  declarations: [TicketsComponent],
  imports: [
    CommonModule,
    RouterModule,
    LoadingPageModule,
    MaterialModule
  ]
})
export class TicketsModule { }
