import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from "./pages/content/movies/movies/movies.component";
import {MovieComponent} from "./pages/content/movie/movie/movie.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found/page-not-found.component";
import {SessionsComponent} from "./pages/content/sessions/sessions/sessions.component";
import {BuyTicketComponent} from "./pages/action/buy-ticket/buy-ticket/buy-ticket.component";
import {CinemasComponent} from "./pages/content/cinemas/cinemas/cinemas.component";
import {CinemaComponent} from "./pages/content/cinema/cinema/cinema.component";
import {SignInComponent} from "./pages/action/sign-in/sign-in/sign-in.component";
import {SignUpComponent} from "./pages/action/sign-up/sign-up/sign-up.component";
import {MyProfileComponent} from "./pages/content/my-profile/my-profile/my-profile.component";
import {CreateUserComponent} from "./pages/action/create-user/create-user/create-user.component";
import {CreateCinemaComponent} from "./pages/action/create-cinema/create-cinema/create-cinema.component";
import {CreateMovieComponent} from "./pages/action/create-movie/create-movie/create-movie.component";
import {AddWalletComponent} from "./pages/action/add-wallet/add-wallet/add-wallet.component";
import {MyWalletComponent} from "./pages/content/my-wallet/my-wallet/my-wallet.component";
import {MyTicketsComponent} from "./pages/content/my-tickets/my-tickets/my-tickets.component";
import {AuthenticatedCanActivateService} from "./services/security/authenticated-can-activate.service";

const routes: Routes = [

  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },

  // Admin actions
  { path: 'create-cinema', component: CreateCinemaComponent, canActivate: [AuthenticatedCanActivateService]},
  { path: 'create-movie', component: CreateMovieComponent, canActivate: [AuthenticatedCanActivateService]},
  // User
  { path: 'my-profile', component: MyProfileComponent, canActivate: [AuthenticatedCanActivateService]},
  { path: 'my-wallet', component: MyWalletComponent, canActivate: [AuthenticatedCanActivateService]},
  { path: 'my-tickets', component: MyTicketsComponent, canActivate: [AuthenticatedCanActivateService]},
  // User actions
  { path: 'create-user', component: CreateUserComponent, canActivate: [AuthenticatedCanActivateService]},
  { path: 'create-wallet', component: AddWalletComponent, canActivate: [AuthenticatedCanActivateService]},
  // Cinemas
  { path: 'cinemas', component: CinemasComponent },
  { path: 'cinemas/:id', component: CinemaComponent },
  // Movies
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:movieId', component: MovieComponent },
  // Sessions
  { path: 'sessions', component: SessionsComponent },
  { path: 'halls/:hallId/sessions', component: SessionsComponent },
  // Buy Ticket
  { path: 'sessions/:id/buy-tickets', component: BuyTicketComponent, canActivate: [AuthenticatedCanActivateService]},
  // Not found
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
