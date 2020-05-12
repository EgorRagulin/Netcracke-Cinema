import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderModule } from "./modules/header/header.module";
import { FooterModule } from "./modules/footer/footer.module";
import { MaterialModule } from "./modules/material/material.module";
import { PageNotFoundModule } from "./pages/page-not-found/page-not-found.module";
import { MoviesModule } from "./pages/content/movies/movies.module";
import { MovieModule } from "./pages/content/movie/movie.module";
import { CreateMovieModule } from "./pages/action/create-movie/create-movie.module";
import { SessionsModule } from "./pages/content/sessions/sessions.module";
import { BuyTicketModule } from "./pages/action/buy-ticket/buy-ticket.module";
import { CinemasModule } from "./pages/content/cinemas/cinemas.module";
import { CinemaModule } from "./pages/content/cinema/cinema.module";
import { HallsModule } from "./pages/content/halls/halls.module";
import { HallModule } from "./pages/content/hall/hall.module";
import { UsersModule } from "./pages/content/users/users.module";
import { UserModule } from "./pages/content/user/user.module";
import { TicketsModule } from "./pages/content/tickets/tickets.module";
import { APIInterceptor } from "./interceptors/api-interceptor";
import { SignUpModule } from "./pages/action/sign-up/sign-up.module";
import { SignInModule } from "./pages/action/sign-in/sign-in.module";
import {MyProfileModule} from "./pages/content/my-profile/my-profile.module";
import {CreateUserModule} from "./pages/action/create-user/create-user.module";
import {UploadPictureModule} from "./pages/action/upload-picture/upload-picture.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    UploadPictureModule,

    HeaderModule,
    FooterModule,
    MaterialModule,
    PageNotFoundModule,

    SignInModule,
    SignUpModule,

    CreateUserModule,
    MyProfileModule,

    MoviesModule,
    MovieModule,
    CreateMovieModule,
    SessionsModule,
    BuyTicketModule,
    CinemasModule,
    CinemaModule,
    HallsModule,
    HallModule,
    UsersModule,
    UserModule,
    TicketsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
