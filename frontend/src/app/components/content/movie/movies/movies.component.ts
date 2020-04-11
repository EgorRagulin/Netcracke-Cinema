import { Component, OnInit } from '@angular/core';
import {Movie} from "src/app/models/Movie";
import {MovieService} from "src/app/services/movie/movie.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {DefaultPageSize, Paging} from "src/app/models/paging/Paging";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private _subscriptions: Subscription[] = [];
  public movies: Movie[];
  private _paging: Paging;
  private _defaultPageSize: number = DefaultPageSize.Movies;

  // Select page size
  public pageSize = this._defaultPageSize;
  public pageSizeOptions = [this._defaultPageSize,
                            this._defaultPageSize * 2,
                            this._defaultPageSize * 3,
                            this._defaultPageSize * 4]

  constructor(private movieService: MovieService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let paging = this._paging = {pageNumber: this.pageNumber,
                                  pageSize: this._defaultPageSize,
                                  totalPages: 1};

    this.getMovies(paging.pageNumber, paging.pageSize);
    this.getTotalPages(paging.pageSize);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  // load movies from beck
  private getMovies(pageNumber: number, pageSize: number): void {
    this._subscriptions.push(this.movieService.getMovies(pageNumber, pageSize)
      .subscribe(movies => this.movies = movies)
    );
  }

  // calculate total page number
  private getTotalPages(pageSize: number): void {
    this._subscriptions.push(this.movieService.getLastPage(pageSize)
      .subscribe(paging => this._paging.totalPages = paging.totalPages)
    );
  }

  // get paging params from client or use default
  get pageNumber(): number {
    let pageNumber: number = this.activateRoute.snapshot.params['pageNumber'];
    if (pageNumber) return pageNumber;
    else return 1;
  }

  // buttons
  displayPreviousButton(): boolean {
    return this._paging.pageNumber > 1;
  }

  public displayNextButton(): boolean {
    return this._paging.pageNumber < this._paging.totalPages;
  }

  public showPreviousPage(): void {
    let pageNumber = --this._paging.pageNumber;
    this._showMoviesPage(pageNumber, this._paging.pageSize);
  }

  public showNextPage(): void {
    let pageNumber = ++this._paging.pageNumber;
    this._showMoviesPage(pageNumber, this._paging.pageSize);
  }

  public updatePageSize(): void {
    this._paging.pageSize = this.pageSize;
    this._paging.pageNumber = 1;
    this._showMoviesPage(this._paging.pageNumber, this._paging.pageSize);
  }

  // update url and get page movies
  private _showMoviesPage(pageNumber: number, pageSize: number): void {
    this.router.navigate(['movies/page/' + pageNumber]);
    this.getMovies(pageNumber, pageSize);
  }

  // route to movie by id
  public goToMovie(movieId: number): void {
    this.router.navigate(['movie/' + movieId]);
  }
}
