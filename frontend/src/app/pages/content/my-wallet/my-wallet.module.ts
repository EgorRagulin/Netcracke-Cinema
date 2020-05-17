import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import {MaterialModule} from "../../../modules/material/material.module";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";



@NgModule({
  declarations: [MyWalletComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LoadingPageModule
  ]
})
export class MyWalletModule { }
