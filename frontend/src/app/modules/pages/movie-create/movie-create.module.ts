import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderModule} from "../../header/header.module";
import {FooterModule} from "../../footer/footer.module";



@NgModule({
  declarations: [MovieCreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderModule,
    FooterModule
  ]
})
export class MovieCreateModule { }
