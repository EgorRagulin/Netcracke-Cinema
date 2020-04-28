import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallComponent } from './hall/hall.component';
import {MaterialModule} from "../../material/material.module";
import {RouterModule} from "@angular/router";
import {LoadingPageModule} from "../../loading-page/loading-page.module";



@NgModule({
  declarations: [HallComponent],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        LoadingPageModule
    ]
})
export class HallModule { }
