import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../../modules/material/material.module";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    LoadingPageModule,
  ]
})
export class UserModule { }
