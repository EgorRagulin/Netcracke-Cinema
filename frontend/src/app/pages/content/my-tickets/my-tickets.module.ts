import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";
import {CompleteTicketModule} from "../../components/complete-ticket/complete-ticket.module";



@NgModule({
  declarations: [MyTicketsComponent],
    imports: [
        CommonModule,
        LoadingPageModule,
        CompleteTicketModule
    ]
})
export class MyTicketsModule { }
