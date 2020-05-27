import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { MovieModel } from "../../models/movie.model";
import { PageModel } from "../../models/page/page.model";
import { SessionModel } from "../../models/session.model";
import {FullMovieModel} from "../../models/full-models/full.movie.model";
import {FullMovieDTO} from "../../DTO/full.movie.dto";
import {AllMovieGenres} from "../../models/all-movie-genres/all-movie-genres";
import {FullSessionModel} from "../../models/full-models/full.session.model";

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

  public getFullMovieById(id: number): Observable<FullMovieModel> {
    return this.http.get<FullMovieModel>(this.rootPath + '/?id=' + id);
  }

  public getMovieSessions(id: number): Observable<SessionModel[]> {
    return this.http.get<SessionModel[]>(this.rootPath + '/sessions/?id=' + id);
  }

  public getMovieFullSessions(id: number): Observable<FullSessionModel[]> {
    return this.http.get<FullSessionModel[]>(this.rootPath + '/full-sessions/?id=' + id);
  }

  public getAllMovieGenres(): Observable<AllMovieGenres> {
    return this.http.get<AllMovieGenres>(this.rootPath + '/all-genres');
  }

  public saveMovieInDB(movie: FullMovieModel): Observable<FullMovieModel> {
    return this.http.post<FullMovieModel>(this.rootPath, new FullMovieDTO(movie));
  }

  public deleteMovie(id: string): Observable<void> {
    return this.http.delete<void>(this.rootPath + '/?id=' + id);
  }

  public addNewSession(movie: MovieModel): Observable<FullSessionModel> {
    return null;
  }
}
