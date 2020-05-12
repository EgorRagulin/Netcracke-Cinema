import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import {MaterialModule} from "../../../modules/material/material.module";
import {FormsModule} from "@angular/forms";
import {StorageService} from "../../../services/security/storage.service";
import {LoginService} from "../../../services/security/login-service";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";



@NgModule({
  declarations: [SignInComponent],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        LoadingPageModule
    ],
  providers: [
    StorageService,
    LoginService
  ]
})
export class SignInModule { }
