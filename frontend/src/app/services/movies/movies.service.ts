import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Movie } from "../../models/Movie";
import { Paging } from "../../DTO/paging/Paging";

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
}
