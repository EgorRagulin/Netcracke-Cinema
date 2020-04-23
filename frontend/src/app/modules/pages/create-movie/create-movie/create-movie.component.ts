import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Movie} from "../../../../models/Movie";
import {MovieGenreTransformer} from "../../../../enum/MovieGenreEnum";
import {FormBuilder} from "@angular/forms";
import {MovieService} from "../../../../services/movie/movie.service";
import {MoviesService} from "../../../../services/movies/movies.service";

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public movies: Movie[];
  public createMovieForm;
  public movieGenres = [];

  public selectedFile;
  public imgURL;

  public genreOptions = MovieGenreTransformer.getArrayOfGenre();

  constructor(
    private movieService: MovieService,
    private moviesService: MoviesService,
    private formBuilder: FormBuilder,
  ) {
    this.createMovieForm = this.formBuilder.group({
      title: 'title',
      picture: 'picture',
      description: 'description',
      ageLimit: '18',
      duration: '03:00:00',
      genres: '',
    });
  }

  ngOnInit(): void {
    this.getMovies(1, 100);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public  onFileChanged(event) {
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }

  updateGenres() {
    let chosenGenre = this.createMovieForm.value.genres;
    if (!this.movieGenres.includes(chosenGenre)) this.movieGenres.push(chosenGenre);
  }

  onSubmit(formData) {
    const uploadData: FormData = this.convertFormDataToUploadData(formData);
    this.clearForm();
    this.movieService.saveMovie(uploadData).subscribe(movie => this.movies.push(movie));
  }

  private convertFormDataToUploadData(formData): FormData {
    const uploadData = new FormData();
    uploadData.append('title', formData.title);
    uploadData.append('description', formData.description);
    uploadData.append('ageLimit', formData.ageLimit);
    uploadData.append('duration', formData.duration);
    uploadData.append('genres', MovieGenreTransformer.convertArrayToString(this.movieGenres));
    uploadData.append('picture', this.selectedFile, this.selectedFile.name);
    return uploadData;
  }

  private clearForm(): void {
    this.createMovieForm.reset();
    this.movieGenres.length = 0;
    this.imgURL = null;
    this.selectedFile = undefined;
  }

  // load movies from beck
  private getMovies(pageNumber: number, pageSize: number): void {
    this._subscriptions.push(this.moviesService.getMovies(pageNumber, pageSize)
      .subscribe(movies => this.movies = movies)
    );
  }
}

