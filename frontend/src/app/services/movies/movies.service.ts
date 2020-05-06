import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../../models/Movie";
import { Page } from "../../models/page/Page";
import { Session } from "../../models/Session";
import {FullMovie} from "../../models/FullModel/FullMovie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private rootPath = '/api/movies';

  constructor(private http: HttpClient) { }

  public getPage(pageNumber: number, pageSize: number): Observable<Page<Movie>> {
    return this.http.get<Page<Movie>>(this.rootPath +
      '/?pageNumber=' + pageNumber +
      '&pageSize=' + pageSize);
  }

  public getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.rootPath +
      '/?id=' + id);
  }

  public getMovieSessions(id: number): Observable<Session[]> {
    return this.http.get<Session[]>(this.rootPath + '/sessions/?id=' + id);
  }

  public saveMovie(uploadData: FormData): Observable<FullMovie> {
    return this.http.post<FullMovie>(this.rootPath, uploadData);
  }

  public deleteMovie(id: string): Observable<void> {
    return this.http.delete<void>(this.rootPath + '/?id=' + id);
  }
}
