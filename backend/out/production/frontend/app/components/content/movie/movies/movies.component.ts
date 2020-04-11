import { Component, OnInit } from '@angular/core';
import {Movie} from "src/app/models/Movie";
import {MovieService} from "src/app/services/movie/movie.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies: Movie[];
  private subscriptions: Subscription[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  private getAllMovies(): void {
    this.subscriptions.push(this.movieService.getMovies()
      .subscribe(movies => this.movies = movies)
    );
  }
}
