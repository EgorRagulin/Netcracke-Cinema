import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Subscription} from "rxjs";
import {MovieModel} from "src/app/models/movie.model";
import {PageModel} from "src/app/models/page/page.model";
import {DefaultPageSize} from "src/app/enum/default.page.size";
import {MoviesService} from "src/app/services/movies/movies.service";
import {PaginatorModel} from "../../../../models/paginator/paginator.model";
import {LoadingService} from "../../../../services/loading/loading.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  private pageOfMovies: PageModel<MovieModel>;

  public paginator: PaginatorModel;
  public movies: MovieModel[];
  public isLoading: boolean;

  constructor(private moviesService: MoviesService,
              private loadingService: LoadingService) { }

  ngOnInit(): void {
    this._getPageMovies(1, DefaultPageSize.Movies);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll();
  }

  private _getPageMovies(pageNumber: number, pageSize: number) {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(this.moviesService.getPage(pageNumber, pageSize)
      .subscribe(pageOfMovies => {
        this.pageOfMovies = pageOfMovies;
        this.paginator = new PaginatorModel(DefaultPageSize.Movies, this.pageOfMovies);
        this.movies = pageOfMovies.collectionOfElements;
        this.isLoading = this.loadingService.changeLoadingStatus(false);
      })
    );
  }

  public updatePageNumber(newPageNumber: number) {
    this._unsubscribeAll();

    this._getPageMovies(newPageNumber, this.pageOfMovies.pageSize);
  }

  public updatePageSize(newPageSize: number) {
    this._unsubscribeAll();

    this._getPageMovies(1, newPageSize);
  }

  private _unsubscribeAll() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
