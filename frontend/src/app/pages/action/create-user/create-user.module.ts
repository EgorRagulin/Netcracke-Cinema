import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../../../modules/material/material.module";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";
import {UploadPictureModule} from "../upload-picture/upload-picture.module";
import {FormValidationService} from "../../../services/form-validation/form-validation.service";
import {CurrentUserService} from "../../../services/current-user/current.user.service";

@NgModule({
  declarations: [CreateUserComponent],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        LoadingPageModule,
        UploadPictureModule,
        ReactiveFormsModule
    ],
  providers: [
    CurrentUserService,
    FormValidationService,
  ]
})
export class CreateUserModule { }
