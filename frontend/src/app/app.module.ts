import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HeaderModule } from "./modules/header/header.module";
import { FooterModule } from "./modules/footer/footer.module";
import { MaterialModule } from "./modules/material/material.module";
import { PageNotFoundModule } from "./modules/pages/page-not-found/page-not-found.module";
import {MoviesModule} from "./modules/pages/movies/movies.module";
import {MovieModule} from "./modules/pages/movie/movie.module";
import {MovieCreateModule} from "./modules/pages/movie-create/movie-create.module";
import {SessionsModule} from "./modules/pages/sessions/sessions.module";
import {TicketBuyModule} from "./modules/pages/ticket-buy/ticket-buy.module";
import {CinemasModule} from "./modules/pages/cinemas/cinemas.module";
import {CinemaModule} from "./modules/pages/cinema/cinema.module";
import {HallsModule} from "./modules/pages/halls/halls.module";
import {HallModule} from "./modules/pages/hall/hall.module";
import {UsersModule} from "./modules/pages/users/users.module";
import {UserModule} from "./modules/pages/user/user.module";
import {TicketsModule} from "./modules/pages/tickets/tickets.module";

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
    PageNotFoundModule,
    MoviesModule,
    MovieModule,
    MovieCreateModule,
    SessionsModule,
    TicketBuyModule,
    CinemasModule,
    CinemaModule,
    HallsModule,
    HallModule,
    UsersModule,
    UserModule,
    TicketsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
