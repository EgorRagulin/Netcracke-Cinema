import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CinemaModel} from "../../models/cinema.model";
import {HallModel} from "../../models/hall.model";
import {FullCinemaModel} from "../../models/full-models/full.cinema.model";
import {FullHallModel} from "../../models/full-models/full.hall.model";

@Injectable({
  providedIn: 'root'
})
export class CinemasService {
  private rootPath = 'api/cinemas/';

  constructor(private http: HttpClient) { }

  public getCinemas(): Observable<CinemaModel[]> {
    return this.http.get<CinemaModel[]>(this.rootPath);
  }

  public getCinema(id: number): Observable<CinemaModel> {
    return this.http.get<CinemaModel>(this.rootPath + '?id=' + id);
  }

  public getFullCinema(id: number): Observable<FullCinemaModel> {
    return this.http.get<FullCinemaModel>(this.rootPath + 'full/?id=' + id);
  }

  public getHalls(id: number): Observable<HallModel[]> {
    return this.http.get<HallModel[]>(this.rootPath + 'halls/?id=' + id);
  }

  public saveCinemaInDB(cinema: CinemaModel): Observable<CinemaModel> {
    return this.http.post<CinemaModel>(this.rootPath, cinema);
  }

  public addHallToCinema(cinema: CinemaModel): Observable<HallModel[]> {
    return this.http.post<HallModel[]>(this.rootPath + 'add-hall', cinema);
  }
}
