import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Validation} from "../../../../form-validation/validation";
import {LoadingService} from "../../../../services/loading/loading.service";
import {FormValidationService} from "../../../../services/form-validation/form-validation.service";
import {Router} from "@angular/router";
import {MovieModel} from "../../../../models/movie.model";
import {SessionsService} from "../../../../services/sessions/sessions.service";
import {HallModel} from "../../../../models/hall.model";
import {CinemaModel} from "../../../../models/cinema.model";
import {CinemasService} from "../../../../services/cinemas/cinemas.service";
import {FullSessionModel} from "../../../../models/full-models/full.session.model";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit, OnDestroy {
  @Input() movie: MovieModel;
  @Output() addSessionToMovieEvent = new EventEmitter();

  private _subscriptions: Subscription[] = [];

  public cinemas: CinemaModel[];
  public halls: HallModel[];
  public sessionCost: number;

  public addNewSessionForm: FormGroup;
  private _selectedDate: Date;
  private _selectedHall: HallModel;

  public validationMessages = Validation.validationMessages;

  public isLoading: boolean;


  constructor(private sessionsService: SessionsService,
              private cinemasService: CinemasService,
              private loadingService: LoadingService,
              private fb: FormBuilder,
              public formValidationService: FormValidationService,
              private router: Router) { }

  ngOnInit(): void {
    this.createAddNewSessionForm();
    this.getCinemas();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  private getCinemas(): void {
    this._subscriptions.push(this.cinemasService.getCinemas().subscribe((cinemas: CinemaModel[]) => {
      if (cinemas != null && cinemas.length > 0) this.cinemas = cinemas;
      else alert('Что-то пошлотне так! Кинотеатры не найдены!');
    }, error => alert(error.message)));
  }

  private createAddNewSessionForm() {
    this.addNewSessionForm = this.fb.group({
      cost: ['',
        [
          Validators.required,
          Validators.maxLength(5),
          Validators.pattern(Validation.validatorsPatterns.cost_BYN)
        ]]
    });
  }

  public addNewSession(): void {
    if (this.isFormValid()) {
      let fullSession: FullSessionModel = new FullSessionModel(this.sessionCost, this._selectedDate, this._selectedHall, this.movie);

      this.isLoading = this.loadingService.changeLoadingStatus(true);

      this._subscriptions.push(this.sessionsService.saveSessionInDb(fullSession)
        .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
        .subscribe((fullSession: FullSessionModel) => {
          if (fullSession != null) this.addSessionToMovieEvent.emit(fullSession);
        }, error => alert(error.message)));
    }
    else alert('Ах ты хитрый жук');
  }

  public isFormValid(): boolean {
    return this.addNewSessionForm.valid && this._selectedDate && this._selectedHall != undefined;
  }

  public selectDate(selectedDate: Date) {
    this._selectedDate = selectedDate;
  }

  public selectCinema(cinemaId: number) {
    this._subscriptions.push(this.cinemasService.getHalls(cinemaId).subscribe((halls: HallModel[]) => {
      if (halls != null && halls.length > 0) this.halls = halls;
      else alert('Что-то пошлотне так! Залы не найдены или у этого кинотеатра их нет!');
    }, error => alert(error.message)));
  }

  public selectHall(selectedHall: HallModel) {
    this._selectedHall = selectedHall;
  }
}
