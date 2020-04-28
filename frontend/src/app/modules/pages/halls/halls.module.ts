import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HallsComponent } from './halls/halls.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../material/material.module";
import {LoadingPageModule} from "../../loading-page/loading-page.module";



@NgModule({
  declarations: [HallsComponent],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        LoadingPageModule
    ]
})
export class HallsModule { }
