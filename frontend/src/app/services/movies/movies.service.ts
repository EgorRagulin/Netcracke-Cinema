import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../../models/Movie";
import { Paging } from "../../DTO/paging/Paging";
import {Session} from "../../models/Session";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private rootPath = 'api/movies/';

  constructor(private http: HttpClient) { }

  getMovies(pageNumber: number, pageSize: number): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.rootPath +
      '?pageNumber=' + --pageNumber +
      '&pageSize=' + pageSize);
  }

  getLastPage(pageSize: number): Observable<Paging>
  {
    return this.http.get<Paging>(this.rootPath +
      '?pageSize=' + pageSize);
  }

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
