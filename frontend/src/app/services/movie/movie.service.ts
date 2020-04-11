import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Movie} from "src/app/models/Movie";
import {HttpClient} from "@angular/common/http";
import {Paging} from "../../models/paging/Paging";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
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

  // saveMovie(movie: Movie): Observable<Movie> {
  //   return this.http.post<Movie>('/api/movies', movie);
  // }
  //
  // deleteMovie(id: string): Observable<void> {
  //   return this.http.delete<void>('/api/movies/id=' + id);
  // }
}
