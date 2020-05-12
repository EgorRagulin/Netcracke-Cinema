import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Picture} from "../../models/picture/picture";

@Injectable({
  providedIn: 'root'
})
export class UploadPictureService {

  constructor(private http: HttpClient) { }

  public getPictureUrl(uploadPicture: FormData): Observable<Picture> {
    return this.http.post<Picture>("/api/upload-picture", uploadPicture);
  }
}
