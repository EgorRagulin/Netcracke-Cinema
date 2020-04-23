import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "src/app/models/Movie";
import {HttpClient} from "@angular/common/http";
import {Session} from "../../models/Session";


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private rootPath = 'api/movies/';

  constructor(private http: HttpClient) { }

  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.rootPath +
      '?id=' + id);
  }

  getMovieSessions(movieId: number): Observable<Session[]> {
    return this.http.get<Session[]>(this.rootPath + 'movieSession/' +
      '?movieId=' + movieId);
  }

  saveMovie(uploadData: FormData): Observable<Movie> {
    return this.http.post<Movie>('/api/movies/', uploadData);
  }

  deleteMovie(id: string): Observable<void> {
    return this.http.delete<void>('/api/movies/id=' + id);
  }
}
