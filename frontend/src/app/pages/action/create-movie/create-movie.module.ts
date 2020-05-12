import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [CreateMovieComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CreateMovieModule { }
