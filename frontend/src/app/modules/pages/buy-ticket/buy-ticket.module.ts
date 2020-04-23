import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { RowComponent } from './row/row.component';
import { PlaceComponent } from './place/place.component';

@NgModule({
  declarations: [BuyTicketComponent, RowComponent, PlaceComponent],
  exports: [
    RowComponent,
    PlaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BuyTicketModule { }
