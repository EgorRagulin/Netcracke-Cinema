import {FullMovieModel} from "../models/full-models/full.movie.model";

export class FullMovieDTO {
  id: number;
  title: string;
  picture: string;
  description: string;
  ageLimit: number;
  duration: string;
  genres: string[];

  constructor(movie: FullMovieModel) {
    this.id = movie.id;
    this.title = movie.title;
    this.picture = movie.picture;
    this.description = movie.description;
    this.ageLimit = movie.ageLimit;
    this.duration = movie.duration + ':00';
    this.genres = movie.genres;
  }
}
