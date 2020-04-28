import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../../material/material.module";
import {LoadingPageModule} from "../../loading-page/loading-page.module";



@NgModule({
  declarations: [UsersComponent],
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        LoadingPageModule
    ]
})
export class UsersModule { }
