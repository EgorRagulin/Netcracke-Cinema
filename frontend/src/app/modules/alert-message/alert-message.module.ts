import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [AlertMessageComponent],
    imports: [
        CommonModule,
        MatDialogModule
    ]
})
export class AlertMessageModule { }
