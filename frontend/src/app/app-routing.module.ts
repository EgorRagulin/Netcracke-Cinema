import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from "./pages/content/movies/movies/movies.component";
import {MovieComponent} from "./pages/content/movie/movie/movie.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found/page-not-found.component";
import {SessionsComponent} from "./pages/content/sessions/sessions/sessions.component";
import {BuyTicketComponent} from "./pages/action/buy-ticket/buy-ticket/buy-ticket.component";
import {CinemasComponent} from "./pages/content/cinemas/cinemas/cinemas.component";
import {CinemaComponent} from "./pages/content/cinema/cinema/cinema.component";
import {HallsComponent} from "./pages/content/halls/halls/halls.component";
import {HallComponent} from "./pages/content/hall/hall/hall.component";
import {TicketsComponent} from "./pages/content/tickets/tickets/tickets.component";
import {SignInComponent} from "./pages/action/sign-in/sign-in/sign-in.component";
import {SignUpComponent} from "./pages/action/sign-up/sign-up/sign-up.component";
import {MyProfileComponent} from "./pages/content/my-profile/my-profile/my-profile.component";
import {CreateUserComponent} from "./pages/action/create-user/create-user/create-user.component";
import {AdminPanelComponent} from "./pages/content/admin-panel/admin-panel/admin-panel.component";
import {CreateCinemaComponent} from "./pages/action/create-cinema/create-cinema/create-cinema.component";
import {CreateMovieComponent} from "./pages/action/create-movie/create-movie/create-movie.component";
import {FormValidationComponent} from "./pages/action/form-validation/form-validation/form-validation.component";
import {AddWalletComponent} from "./pages/action/add-wallet/add-wallet/add-wallet.component";
import {MyWalletComponent} from "./pages/content/my-wallet/my-wallet/my-wallet.component";


const routes: Routes = [

  { path: '', component: FormValidationComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },



  // Admin
  { path: 'admin-panel', component: AdminPanelComponent },

  { path: 'create-cinema', component: CreateCinemaComponent },
  { path: 'create-movie', component: CreateMovieComponent },

  // Client
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'my-wallet', component: MyWalletComponent },

  { path: 'create-user', component: CreateUserComponent },
  { path: 'create-wallet', component: AddWalletComponent },


  // Movies
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:movieId', component: MovieComponent },
  // Cinemas
  { path: 'cinemas', component: CinemasComponent },
  { path: 'cinemas/:id', component: CinemaComponent },
  // Halls
  { path: 'halls', component: HallsComponent },
  { path: 'cinemas/:id/halls', component: HallsComponent },
  { path: 'halls/:id', component: HallComponent },
  // Sessions
  { path: 'sessions', component: SessionsComponent },
  { path: 'halls/:hallId/sessions', component: SessionsComponent },
  { path: 'movies/:movieId/sessions', component: SessionsComponent },
  // Tickets
  { path: 'tickets', component: TicketsComponent },
  { path: 'users/:userId/tickets', component: TicketsComponent },
  { path: 'sessions/:id/buy-ticket', component: BuyTicketComponent },
  // Not found
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
