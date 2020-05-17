import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddWalletComponent } from './add-wallet/add-wallet.component';
import {MaterialModule} from "../../../modules/material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {FormValidationService} from "../../../services/form-validation/form-validation.service";
import {LoadingPageModule} from "../../../modules/loading-page/loading-page.module";



@NgModule({
  declarations: [AddWalletComponent],
    imports: [
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        LoadingPageModule
    ],
  providers: [
    FormValidationService,
  ]
})
export class AddWalletModule { }
