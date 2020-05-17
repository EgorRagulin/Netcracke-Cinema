import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {PictureModel} from "../../models/picture/picture.model";

@Injectable({
  providedIn: 'root'
})
export class UploadPictureService {

  constructor(private http: HttpClient) { }

  public getPictureUrl(uploadPicture: FormData): Observable<PictureModel> {
    return this.http.post<PictureModel>("/api/upload-picture", uploadPicture);
  }
}
