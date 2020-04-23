import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsComponent } from './sessions/sessions.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "src/app/modules/material/material.module";



@NgModule({
  declarations: [SessionsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SessionsModule { }
