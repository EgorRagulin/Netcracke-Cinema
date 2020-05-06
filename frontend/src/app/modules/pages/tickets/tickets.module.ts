import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import {LoadingPageModule} from "../../loading-page/loading-page.module";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../material/material.module";



@NgModule({
  declarations: [TicketsComponent],
  imports: [
    CommonModule,
    LoadingPageModule,
    RouterModule,
    MaterialModule
  ]
})
export class TicketsModule { }
