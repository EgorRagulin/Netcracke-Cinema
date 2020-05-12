import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import {FormsModule} from "@angular/forms";
import {MaterialModule} from "../../../modules/material/material.module";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";
import {UploadPictureModule} from "../upload-picture/upload-picture.module";



@NgModule({
  declarations: [CreateUserComponent],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        LoadingPageModule,
        UploadPictureModule
    ]
})
export class CreateUserModule { }
