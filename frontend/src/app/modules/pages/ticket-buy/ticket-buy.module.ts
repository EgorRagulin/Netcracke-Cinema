import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketBuyComponent} from './ticket-buy/ticket-buy.component';
import { RowComponent } from './row/row.component';
import { PlaceComponent } from './place/place.component';
import {MaterialModule} from "src/app/modules/material/material.module";
import {LoadingPageModule} from "../../loading-page/loading-page.module";

@NgModule({
  declarations: [TicketBuyComponent, RowComponent, PlaceComponent],
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
export class TicketBuyModule { }
