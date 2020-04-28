import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hall} from "../../models/Hall";
import {Session} from "../../models/Session";


@Injectable({
  providedIn: 'root'
})
export class HallsService {
  private rootPath = 'api/halls/';

  constructor(private http: HttpClient) { }

  public getHalls(): Observable<Hall[]> {
    return this.http.get<Hall[]>(this.rootPath);
  }

  public getHall(id: number): Observable<Hall> {
    return this.http.get<Hall>(this.rootPath + '?id=' + id);
  }

  public getSessions(id: number): Observable<Session[]> {
    return this.http.get<Session[]>(this.rootPath + 'sessions/?id=' + id);
  }
}
