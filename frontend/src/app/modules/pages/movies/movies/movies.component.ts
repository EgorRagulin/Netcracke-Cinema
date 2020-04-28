import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Subscription} from "rxjs";
import {Movie} from "src/app/models/Movie";
import {Paging} from "src/app/DTO/paging/Paging";
import {DefaultPageSize} from "src/app/enum/DefaultPageSize";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieGenreTransformer} from "src/app/enum/MovieGenreEnum";
import {MoviesService} from "src/app/services/movies/movies.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public paging: Paging;
  public movies: Movie[];
  public loading: boolean;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    let paging = this.paging = {
      DefaultPageSize: DefaultPageSize.Movies,
      pageNumber: 1,
      pageSize: DefaultPageSize.Movies,
      totalElements: 1,
      totalPages: 1
    };

    this.getMovies(paging.pageNumber, paging.pageSize);
    this.getTotalPagesAndElements(paging.pageSize);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  // load movies from beck
  private getMovies(pageNumber: number, pageSize: number): void {
    this.loading = true;
    this._subscriptions.push(this.moviesService.getMovies(pageNumber, pageSize)
      .subscribe(movies => {
        this.movies = this.genreTransformToArray(movies);
        this.loading = false;
      })
    );
  }

  private genreTransformToArray(movies: Movie[]) {
    movies.forEach(movie => {
      if (typeof movie.genres === "string")
        movie.genres = MovieGenreTransformer.convertStringToArray(movie.genres)
    });
    return movies;
  }

  // load total page number
  private getTotalPagesAndElements(pageSize: number): void {
    this._subscriptions.push(this.moviesService.getLastPage(pageSize)
      .subscribe(paging => {
        this.paging.totalPages = paging.totalPages
        this.paging.totalElements = paging.totalElements
      })
    );
  }

  public updatePageNumber(newPageNumber: number) {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
    this.getMovies(newPageNumber, this.paging.pageSize);
    this.paging.pageNumber = newPageNumber;
  }

  public updatePageSize(newPageSize: number) {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
    this.getMovies(1, newPageSize);
    this.getTotalPagesAndElements(newPageSize);
    this.paging.pageNumber = 1;
    this.paging.pageSize = newPageSize;
  }
}
