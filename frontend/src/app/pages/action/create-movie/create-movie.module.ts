import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";
import {UploadPictureModule} from "../upload-picture/upload-picture.module";
import {MaterialModule} from "../../../modules/material/material.module";

@NgModule({
  declarations: [CreateMovieComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoadingPageModule,
    UploadPictureModule,
    MaterialModule,
    FormsModule,
  ]
})
export class CreateMovieModule { }
