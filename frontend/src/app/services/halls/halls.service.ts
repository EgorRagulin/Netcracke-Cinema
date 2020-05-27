import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HallModel} from "../../models/hall.model";
import {SessionModel} from "../../models/session.model";
import {CinemaModel} from "../../models/cinema.model";
import {FullHallModel} from "../../models/full-models/full.hall.model";
import {FullSessionModel} from "../../models/full-models/full.session.model";


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

  public getSessions(id: number): Observable<FullSessionModel[]> {
    return this.http.get<FullSessionModel[]>(this.rootPath + 'full-sessions/?id=' + id);
  }
}
