import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from "../material/material.module";
import {RouterModule} from "@angular/router";
import {StorageService} from "../../services/security/storage.service";
import {LoginService} from "../../services/security/login-service";


@NgModule({
  declarations: [HeaderComponent, NavBarComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  providers: [
    StorageService
  ]
})
export class HeaderModule { }
