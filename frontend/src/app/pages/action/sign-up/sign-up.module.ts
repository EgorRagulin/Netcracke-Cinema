import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MaterialModule} from "../../../modules/material/material.module";
import {FormsModule} from "@angular/forms";
import {StorageService} from "../../../services/security/storage.service";
import {LoginService} from "../../../services/security/login-service";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";



@NgModule({
  declarations: [SignUpComponent],
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
export class SignUpModule { }
