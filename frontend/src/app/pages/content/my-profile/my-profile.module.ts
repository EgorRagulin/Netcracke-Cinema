import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../../modules/material/material.module";
import {CurrentLoginService} from "../../../services/current-login/current-login.service";

@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    LoadingPageModule,
    RouterModule,
    MaterialModule
  ],
  providers: [
    CurrentLoginService
  ]
})
export class MyProfileModule { }
