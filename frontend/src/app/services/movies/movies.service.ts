import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MovieModel } from "../../models/movie.model";
import { PageModel } from "../../models/page/page.model";
import { SessionModel } from "../../models/session.model";
import {FullMovieModel} from "../../models/full-models/full.movie.model";
import {FullMovieDTO} from "../../DTO/full.movie.dto";
import {AllMovieGenres} from "../../models/all-movie-genres/all-movie-genres";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private rootPath = '/api/movies';

  constructor(private http: HttpClient) { }

  public getPage(pageNumber: number, pageSize: number): Observable<PageModel<MovieModel>> {
    return this.http.get<PageModel<MovieModel>>(this.rootPath +
      '/?pageNumber=' + pageNumber +
      '&pageSize=' + pageSize);
  }

  public getMovieById(id: number): Observable<MovieModel> {
    return this.http.get<MovieModel>(this.rootPath + '/?id=' + id);
  }

  public getMovieSessions(id: number): Observable<SessionModel[]> {
    return this.http.get<SessionModel[]>(this.rootPath + '/sessions/?id=' + id);
  }

  public getAllMovieGenres(): Observable<AllMovieGenres> {
    return this.http.get<AllMovieGenres>(this.rootPath + '/all-genres');
  }

  public saveMovieInDB(movie: FullMovieModel): Observable<FullMovieModel> {
    console.log( new FullMovieDTO(movie));
    return this.http.post<FullMovieModel>(this.rootPath, new FullMovieDTO(movie));
  }

  public deleteMovie(id: string): Observable<void> {
    return this.http.delete<void>(this.rootPath + '/?id=' + id);
  }
}
