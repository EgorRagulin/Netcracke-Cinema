import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "src/app/modules/material/material.module";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";



@NgModule({
  declarations: [MovieComponent],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        LoadingPageModule
    ]
})
export class MovieModule { }
