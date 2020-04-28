import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketsComponent } from './tickets/tickets.component';
import {LoadingPageModule} from "../../loading-page/loading-page.module";



@NgModule({
  declarations: [TicketsComponent],
    imports: [
        CommonModule,
        LoadingPageModule
    ]
})
export class TicketsModule { }
