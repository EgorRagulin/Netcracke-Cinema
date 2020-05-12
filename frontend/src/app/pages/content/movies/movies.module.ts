import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MoviesComponent } from './movies/movies.component';
import {RouterModule} from "@angular/router";
import {PaginatorModule} from "../../../modules/paginator/paginator.module";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";
import {MaterialModule} from "../../../modules/material/material.module";



@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    FormsModule,
    PaginatorModule,
    RouterModule,
    MaterialModule,
    LoadingPageModule
  ]
})
export class MoviesModule { }
