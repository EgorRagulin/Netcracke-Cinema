import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import {MaterialModule} from "../../../modules/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StorageService} from "../../../services/security/storage.service";
import {LoginService} from "../../../services/security/login-service";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";
import {FormValidationService} from "../../../services/form-validation/form-validation.service";



@NgModule({
  declarations: [SignInComponent],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        LoadingPageModule,
        ReactiveFormsModule
    ],
  providers: [
    StorageService,
    LoginService,
    FormValidationService,
  ]
})
export class SignInModule { }
