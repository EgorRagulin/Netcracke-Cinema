import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import {MaterialModule} from "../../../modules/material/material.module";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [MyWalletComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LoadingPageModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class MyWalletModule { }
