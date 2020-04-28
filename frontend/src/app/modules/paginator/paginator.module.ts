import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from "./paginator/paginator.component";
import { MaterialModule } from "../material/material.module";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { BubblesPaginatorComponent } from './bubbles-paginator/bubbles-paginator.component';
import { BubblePageComponent } from './bubble-page/bubble-page.component';
import { BubbleComponent } from './bubble/bubble.component';




@NgModule({
  declarations: [PaginatorComponent, BubblesPaginatorComponent, BubblePageComponent, BubbleComponent],
  exports: [
    PaginatorComponent
  ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        RouterModule
    ]
})
export class PaginatorModule { }
