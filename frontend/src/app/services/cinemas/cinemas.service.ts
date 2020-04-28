import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cinema} from "../../models/Cinema";
import {Hall} from "../../models/Hall";

@Injectable({
  providedIn: 'root'
})
export class CinemasService {
  private rootPath = 'api/cinemas/';

  constructor(private http: HttpClient) { }

  public getCinemas(): Observable<Cinema[]> {
    return this.http.get<Cinema[]>(this.rootPath);
  }

  public getCinema(id: number): Observable<Cinema> {
    return this.http.get<Cinema>(this.rootPath + '?id=' + id);
  }

  public getHalls(id: number): Observable<Hall[]> {
    return this.http.get<Hall[]>(this.rootPath + 'halls/?id=' + id);
  }
}
