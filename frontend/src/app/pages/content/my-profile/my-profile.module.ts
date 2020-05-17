import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../../modules/material/material.module";

@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    LoadingPageModule,
    RouterModule,
    MaterialModule
  ]
})
export class MyProfileModule { }
