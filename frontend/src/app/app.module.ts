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
import { APIInterceptor } from "./interceptors/api-interceptor";
import { SignUpModule } from "./pages/action/sign-up/sign-up.module";
import { SignInModule } from "./pages/action/sign-in/sign-in.module";
import {MyProfileModule} from "./pages/content/my-profile/my-profile.module";
import {CreateUserModule} from "./pages/action/create-user/create-user.module";
import {UploadPictureModule} from "./pages/action/upload-picture/upload-picture.module";
import {AdminPanelModule} from "./pages/content/admin-panel/admin-panel.module";
import {CreateCinemaModule} from "./pages/action/create-cinema/create-cinema.module";
import {AddWalletModule} from "./pages/action/add-wallet/add-wallet.module";
import {MyWalletModule} from "./pages/content/my-wallet/my-wallet.module";
import {AddSessionModule} from "./pages/action/add-session/add-session.module";
import {DatePickerModule} from "./modules/date-picker/date-picker.module";
import {TimePickerModule} from "./modules/time-picker/time-picker.module";

import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import {MyTicketsModule} from "./pages/content/my-tickets/my-tickets.module";

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
    PageNotFoundModule,

    SignInModule,
    SignUpModule,

    //Admin
    AdminPanelModule,
    CreateCinemaModule,
    CreateMovieModule,

    //Client
    MyProfileModule,
    MyWalletModule,
    MyTicketsModule,
    CreateUserModule,
    AddWalletModule,

    MoviesModule,
    MovieModule,
    SessionsModule,
    CinemasModule,
    CinemaModule,

    CreateMovieModule,
    AddSessionModule,
    BuyTicketModule,

    UploadPictureModule,
    DatePickerModule,
    TimePickerModule,

    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MaterialModule,
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
