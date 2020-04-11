import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MoviesComponent} from "./components/content/movie/movies/movies.component";
import {MovieComponent} from "./components/content/movie/movie/movie.component";
import {NotFoundComponent} from "./components/content/not-found/not-found/not-found.component";


const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/page/:pageNumber', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
