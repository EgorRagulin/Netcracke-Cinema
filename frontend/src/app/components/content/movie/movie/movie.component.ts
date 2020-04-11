import { Component, OnInit } from '@angular/core';
import {Movie} from "../../../../models/Movie";
import {MovieService} from "../../../../services/movie/movie.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movie: Movie;
  private subscription: Subscription

  constructor(private movieService: MovieService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];

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
