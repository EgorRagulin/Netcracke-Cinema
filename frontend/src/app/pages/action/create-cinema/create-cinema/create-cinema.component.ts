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
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Validation} from "../../../../form-validation/validation";
import {FormValidationService} from "../../../../services/form-validation/form-validation.service";

@Component({
  selector: 'app-create-cinema',
  templateUrl: './create-cinema.component.html',
  styleUrls: ['./create-cinema.component.css']
})
export class CreateCinemaComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  public cinema: CinemaModel = new CinemaModel();

  public createCinemaForm: FormGroup;

  private _selectedPicture: FormData;

  public validationMessages = Validation.validationMessages;

  public isLoading: boolean;

  constructor(private uploadPictureService: UploadPictureService,
              private cinemasService: CinemasService,
              private loadingService: LoadingService,
              private fb: FormBuilder,
              public formValidationService: FormValidationService,
              private router: Router) { }

  ngOnInit(): void {
    this.createSignInForms();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  private createSignInForms() {
    this.createCinemaForm = this.fb.group({
      cinemaName: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(25),
          Validators.pattern(Validation.validatorsPatterns.cyrillic_latin_numbers_space)
        ]],
      cinemaAddress: ['',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(25),
          Validators.pattern(Validation.validatorsPatterns.cyrillic_latin_numbers_space_dot_comma_dash)
        ]]
    });
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
          if (savedCinema != null && savedCinema.id) this.router.navigate(['cinemas/' + savedCinema.id]);
          else alert('тото пошло не так!')
      }, error => alert(error.message)));
  }
}
