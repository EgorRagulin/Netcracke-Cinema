import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from "./modules/pages/movies/movies/movies.component";
import {MovieComponent} from "./modules/pages/movie/movie/movie.component";
import {MovieCreateComponent} from "./modules/pages/movie-create/movie-create/movie-create.component";
import {PageNotFoundComponent} from "./modules/pages/page-not-found/page-not-found/page-not-found.component";
import {SessionsComponent} from "./modules/pages/sessions/sessions/sessions.component";
import {TicketBuyComponent} from "./modules/pages/ticket-buy/ticket-buy/ticket-buy.component";
import {CinemasComponent} from "./modules/pages/cinemas/cinemas/cinemas.component";
import {CinemaComponent} from "./modules/pages/cinema/cinema/cinema.component";
import {HallsComponent} from "./modules/pages/halls/halls/halls.component";
import {HallComponent} from "./modules/pages/hall/hall/hall.component";
import {UsersComponent} from "./modules/pages/users/users/users.component";
import {UserComponent} from "./modules/pages/user/user/user.component";
import {TicketsComponent} from "./modules/pages/tickets/tickets/tickets.component";


const routes: Routes = [
  // Movies
  { path: '', component: MoviesComponent },
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
  // Users
  { path: 'users', component: UsersComponent },
  { path: 'users/:id', component: UserComponent },

  { path: 'sessions/:id/buyticket', component: TicketBuyComponent },
  // Admin
  { path: 'create/movie', component: MovieCreateComponent },
  // Not found
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
