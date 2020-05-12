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
import {UploadPictureComponent} from "./pages/action/upload-picture/upload-picture/upload-picture.component";


const routes: Routes = [

  { path: '', component: UploadPictureComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'admin-panel', component: SignInComponent },

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
  // Client action
  { path: 'sessions/:id/buy-ticket', component: BuyTicketComponent },
  // Not found
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
