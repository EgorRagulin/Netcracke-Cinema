import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../../modules/material/material.module";
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [AdminPanelComponent],
  exports: [
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatMenuModule,
  ]
})
export class AdminPanelModule { }
