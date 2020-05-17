import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LoadingService} from "../../../../services/loading/loading.service";
import {UploadPictureService} from "../../../../services/upload-picture/upload-picture.service";
import {Router} from "@angular/router";
import {PictureModel} from "../../../../models/picture/picture.model";
import {CinemaModel} from "../../../../models/cinema.model";
import {CinemasService} from "../../../../services/cinemas/cinemas.service";
import {FullCinemaModel} from "../../../../models/full-models/full.cinema.model";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-create-cinema',
  templateUrl: './create-cinema.component.html',
  styleUrls: ['./create-cinema.component.css']
})
export class CreateCinemaComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public cinema: CinemaModel = new CinemaModel();
  public isLoading: boolean;

  private _selectedPicture: FormData;

  constructor(private loadingService: LoadingService,
              private uploadPictureService: UploadPictureService,
              private cinemasService: CinemasService,
              private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  public addCinema(): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this.uploadPicture();
  }

  public setSelectedPicture(selectedPicture: FormData) {
    this._selectedPicture = selectedPicture;
  }

  private uploadPicture() {
    if (this._selectedPicture) {
      this._subscriptions.push(
        this.uploadPictureService.getPictureUrl(this._selectedPicture)
          .subscribe((picture: PictureModel) => {
            if (picture.pictureUrl) this.cinema.picture = picture.pictureUrl;
            this.saveCinemaInDB();
          }, (error) => alert(error.message)));
    }
    else this.saveCinemaInDB()
  }

  private saveCinemaInDB(): void {
    this._subscriptions.push(
      this.cinemasService.saveCinemaInDB(this.cinema)
        .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
        .subscribe((savedCinema: FullCinemaModel) => {
          if (savedCinema.id) this.router.navigate(['cinemas/' + savedCinema.id])
      }, error => alert(error.message)));
  }
}
