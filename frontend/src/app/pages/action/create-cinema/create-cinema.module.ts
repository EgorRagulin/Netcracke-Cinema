import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCinemaComponent } from './create-cinema/create-cinema.component';
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";
import {UploadPictureModule} from "../upload-picture/upload-picture.module";
import {MaterialModule} from "../../../modules/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [CreateCinemaComponent],
    imports: [
        CommonModule,
        LoadingPageModule,
        UploadPictureModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class CreateCinemaModule { }
