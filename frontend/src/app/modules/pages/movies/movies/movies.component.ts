import {Component, OnDestroy, OnInit} from '@angular/core';
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
  private _defaultPageSize: number = DefaultPageSize.Movies;
  public movies: Movie[];

  // Select page size
  public pageSize = this._defaultPageSize;
  public pageSizeOptions = [this._defaultPageSize,
                            this._defaultPageSize * 2,
                            this._defaultPageSize * 3,
                            this._defaultPageSize * 4]

  constructor(private moviesService: MoviesService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }
  //
  ngOnInit(): void {
    let paging = this.paging = {pageNumber: this.pageNumber,
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
    this._subscriptions.push(this.moviesService.getMovies(pageNumber, pageSize)
      .subscribe(movies => {
        this.movies = movies;
        this.movies.forEach(movie => {
          if (typeof movie.genres === "string") {
            movie.genres = MovieGenreTransformer.convertStringToArray(movie.genres);
          }
        });
      })
    );
  }

  // calculate total page number
  private getTotalPages(pageSize: number): void {
    this._subscriptions.push(this.moviesService.getLastPage(pageSize)
      .subscribe(paging => this.paging.totalPages = paging.totalPages)
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
    return this.paging.pageNumber > 1;
  }

  public displayNextButton(): boolean {
    return this.paging.pageNumber < this.paging.totalPages;
  }

  public showPreviousPage(): void {
    let pageNumber = --this.paging.pageNumber;
    this._showMoviesPage(pageNumber, this.paging.pageSize);
  }

  public showNextPage(): void {
    let pageNumber = ++this.paging.pageNumber;
    this._showMoviesPage(pageNumber, this.paging.pageSize);
  }

  public updatePageSize(): void {
    this.paging.pageSize = this.pageSize;
    this.paging.pageNumber = 1;
    this._showMoviesPage(this.paging.pageNumber, this.paging.pageSize);
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
