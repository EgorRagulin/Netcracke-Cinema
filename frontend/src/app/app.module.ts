import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HeaderModule } from "./modules/header/header.module";
import { FooterModule } from "./modules/footer/footer.module";
import { MaterialModule } from "./modules/material/material.module";
import { NotFoundModule } from "./modules/pages/not-found/not-found.module";
import {MoviesModule} from "./modules/pages/movies/movies.module";
import {MovieModule} from "./modules/pages/movie/movie.module";
import {CreateMovieModule} from "./modules/pages/create-movie/create-movie.module";
import {SessionsModule} from "./modules/pages/sessions/sessions.module";
import {BuyTicketModule} from "./modules/pages/buy-ticket/buy-ticket.module";



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    HeaderModule,
    FooterModule,
    MaterialModule,
    NotFoundModule,
    MoviesModule,
    MovieModule,
    CreateMovieModule,
    SessionsModule,
    BuyTicketModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
