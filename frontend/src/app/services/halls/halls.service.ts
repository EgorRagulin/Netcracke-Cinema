import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HallModel} from "../../models/hall.model";
import {SessionModel} from "../../models/session.model";
import {CinemaModel} from "../../models/cinema.model";
import {FullHallModel} from "../../models/full-models/full.hall.model";


@Injectable({
  providedIn: 'root'
})
export class HallsService {
  private rootPath = 'api/halls/';

  constructor(private http: HttpClient) { }

  public getHalls(): Observable<HallModel[]> {
    return this.http.get<HallModel[]>(this.rootPath);
  }

  public getHall(id: number): Observable<HallModel> {
    return this.http.get<HallModel>(this.rootPath + '?id=' + id);
  }

  public getSessions(id: number): Observable<SessionModel[]> {
    return this.http.get<SessionModel[]>(this.rootPath + 'sessions/?id=' + id);
  }
}
