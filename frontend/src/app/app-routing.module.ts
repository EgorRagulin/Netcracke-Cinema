import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from "./modules/pages/movies/movies/movies.component";
import {MovieComponent} from "./modules/pages/movie/movie/movie.component";
import {CreateMovieComponent} from "./modules/pages/create-movie/create-movie/create-movie.component";
import {NotFoundComponent} from "./modules/pages/not-found/not-found/not-found.component";
import {SessionsComponent} from "./modules/pages/sessions/sessions/sessions.component";
import {BuyTicketComponent} from "./modules/pages/buy-ticket/buy-ticket/buy-ticket.component";


const routes: Routes = [
  // Movies
  { path: '', component: MoviesComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/page/:pageNumber', component: MoviesComponent },
  // Movie
  { path: 'movie/:movieId', component: MovieComponent },
  // Session
  { path: 'movie/:movieId/sessions', component: SessionsComponent },
  { path: 'sessions/:sessionId/buyticket', component: BuyTicketComponent },
  // Admin
  { path: 'create/movie', component: CreateMovieComponent },
  // Not found
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
