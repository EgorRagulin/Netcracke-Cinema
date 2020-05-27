import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from "../material/material.module";
import {RouterModule} from "@angular/router";
import {AdminPanelModule} from "../../pages/content/admin-panel/admin-panel.module";
import {CurrentLoginService} from "../../services/current-login/current-login.service";


@NgModule({
  declarations: [HeaderComponent, NavBarComponent],
  exports: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
        AdminPanelModule
    ],
  providers: [
    CurrentLoginService
  ]
})
export class HeaderModule { }
