import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {MovieModel} from "../../../../models/movie.model";
import {LoadingService} from "../../../../services/loading/loading.service";
import {UploadPictureService} from "../../../../services/upload-picture/upload-picture.service";
import {Router} from "@angular/router";
import {PictureModel} from "../../../../models/picture/picture.model";
import {MoviesService} from "../../../../services/movies/movies.service";
import {FullMovieModel} from "../../../../models/full-models/full.movie.model";
import {finalize} from "rxjs/operators";
import {AllMovieGenres} from "../../../../models/all-movie-genres/all-movie-genres";

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public movie: FullMovieModel = new FullMovieModel();
  public isLoading: boolean;

  private _selectedPicture: FormData;

  public allGenres: string[] = [];

  constructor(private loadingService: LoadingService,
              private uploadPictureService: UploadPictureService,
              private moviesService: MoviesService,
              private router: Router) { }

  ngOnInit(): void {
    this.getArrayOfAllGenres();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  public addMovie(): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this.uploadPicture();
  }

  public setSelectedPicture(selectedPicture: FormData) {
    this._selectedPicture = selectedPicture;
  }

  private uploadPicture() {
    if (this._selectedPicture) {
      this._subscriptions.push(
        this.uploadPictureService.getPictureUrl(this._selectedPicture)
          .subscribe((picture: PictureModel) => {
            if (picture.pictureUrl) this.movie.picture = picture.pictureUrl;
            this.saveMovieInDB()
          }, (error) => alert(error.message)));
    } else this.saveMovieInDB();
  }

  private saveMovieInDB(): void {
    this._subscriptions.push(
      this.moviesService.saveMovieInDB(this.movie)
        .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
        .subscribe((savedMovie: FullMovieModel) => {
          if (savedMovie.id) this.router.navigate(['movies/' + savedMovie.id]);
          }, (error) => alert(error.message)));
  }

  private getArrayOfAllGenres(): void {
    this.moviesService.getAllMovieGenres().subscribe((allGenres: AllMovieGenres) => this.allGenres = allGenres.genres);
  }

  public selectGenre(selectedGenre: string) {
    this.movie.genres.push(selectedGenre);
    this.allGenres = this.allGenres.filter(genre => genre != selectedGenre);
  }
}







