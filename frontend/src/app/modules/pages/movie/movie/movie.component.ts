import {Component, OnDestroy, OnInit} from '@angular/core';
import {Movie} from "../../../../models/Movie";
import {Subscription} from "rxjs";
import {MovieService} from "../../../../services/movie/movie.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy{
  public movie: Movie;
  private subscription: Subscription

  constructor(private movieService: MovieService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['movieId'];
    this.getMovie(id);
  }

  private getMovie(id: number): void {
    this.subscription = this.movieService.getMovieById(id)
      .subscribe(movie => this.movie = movie);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
