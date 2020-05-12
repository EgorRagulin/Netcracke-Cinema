import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";

@NgModule({
  declarations: [MyProfileComponent],
  imports: [
    CommonModule,
    LoadingPageModule
  ]
})
export class MyProfileModule { }
