import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuyTicketComponent} from './buy-ticket/buy-ticket.component';
import { RowComponent } from './row/row.component';
import { PlaceComponent } from './place/place.component';
import {MaterialModule} from "src/app/modules/material/material.module";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";


@NgModule({
  declarations: [BuyTicketComponent, RowComponent, PlaceComponent],
  exports: [
    RowComponent,
    PlaceComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        LoadingPageModule
    ]
})
export class BuyTicketModule { }
