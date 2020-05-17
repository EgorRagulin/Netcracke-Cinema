import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../../modules/material/material.module";



@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class AdminPanelModule { }
