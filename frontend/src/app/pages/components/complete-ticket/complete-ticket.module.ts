import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteTicketComponent } from './complete-ticket/complete-ticket.component';



@NgModule({
  declarations: [CompleteTicketComponent],
  exports: [
    CompleteTicketComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CompleteTicketModule { }
