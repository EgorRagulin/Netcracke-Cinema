import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "src/app/modules/material/material.module";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";
import {AddSessionModule} from "../../action/add-session/add-session.module";
import {CurrentLoginService} from "../../../services/current-login/current-login.service";



@NgModule({
  declarations: [MovieComponent],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        LoadingPageModule,
        AddSessionModule
    ],
  providers: [
    CurrentLoginService
  ]
})
export class MovieModule { }
