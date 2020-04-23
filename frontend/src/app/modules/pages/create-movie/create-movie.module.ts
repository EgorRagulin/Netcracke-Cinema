import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderModule} from "../../header/header.module";
import {FooterModule} from "../../footer/footer.module";



@NgModule({
  declarations: [CreateMovieComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule
  ]
})
export class CreateMovieModule { }
