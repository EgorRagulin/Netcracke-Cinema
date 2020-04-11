import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "src/app/models/Movie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private rootPath = 'api/movies/';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.rootPath);
  }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>('/api/movies/id=' + id);
  }
  // saveMovie(movie: Movie): Observable<Movie> {
  //   return this.http.post<Movie>('/api/movies', movie);
  // }
  //
  // deleteMovie(id: string): Observable<void> {
  //   return this.http.delete<void>('/api/movies/id=' + id);
  // }
  //

}
