import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { FooterModule } from "../../footer/footer.module";
import { HeaderModule } from "../../header/header.module";
import { MoviesComponent } from './movies/movies.component';
import {PaginatorModule} from "../../paginator/paginator.module";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../material/material.module";
import {LoadingPageModule} from "../../loading-page/loading-page.module";


@NgModule({
  declarations: [MoviesComponent],
  imports: [
    CommonModule,
    FormsModule,
    FooterModule,
    HeaderModule,
    PaginatorModule,
    RouterModule,
    MaterialModule,
    LoadingPageModule
  ]
})
export class MoviesModule { }
