import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieModel} from "../../../../models/movie.model";
import {Subscription} from "rxjs";
import {MoviesService} from "../../../../services/movies/movies.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FullMovieModel} from "../../../../models/full-models/full.movie.model";
import {LoadingService} from "../../../../services/loading/loading.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy{
  private subscription: Subscription;
  public movie: MovieModel;
  public isLoading;

  constructor(private moviesService: MoviesService,
              private loadingService: LoadingService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovie();
  }

  private getMovie(): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);
    const id = this.activateRoute.snapshot.params['movieId'];

    this.subscription = this.moviesService.getMovieById(id)
      .subscribe(movie => {
        this.movie = movie;
        this.isLoading = this.loadingService.changeLoadingStatus(false);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
