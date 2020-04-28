import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemasComponent } from './cinemas/cinemas.component';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../../material/material.module";
import {LoadingPageModule} from "../../loading-page/loading-page.module";



@NgModule({
  declarations: [CinemasComponent],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        LoadingPageModule
    ]
})
export class CinemasModule { }
