import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaComponent } from './cinema/cinema.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../../modules/material/material.module";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";
import {CurrentLoginService} from "../../../services/current-login/current-login.service";

@NgModule({
  declarations: [CinemaComponent],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        LoadingPageModule
    ],
    providers: [
      CurrentLoginService
    ]
})
export class CinemaModule { }
