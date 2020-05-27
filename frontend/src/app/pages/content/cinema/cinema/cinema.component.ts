import {Component, OnDestroy, OnInit} from '@angular/core';
import {CinemasService} from "../../../../services/cinemas/cinemas.service";
import {Subscription} from "rxjs";
import {CinemaModel} from "../../../../models/cinema.model";
import {ActivatedRoute} from "@angular/router";
import {LoadingService} from "../../../../services/loading/loading.service";
import {finalize} from "rxjs/operators";
import {HallModel} from "../../../../models/hall.model";
import {FullCinemaModel} from "../../../../models/full-models/full.cinema.model";
import {AuthService} from "../../../../services/security/auth-service";
import {CurrentLoginService} from "../../../../services/current-login/current-login.service";
import {AlertMessageService} from "../../../../services/alert-message/alert-message.service";
import {MessageModel} from "../../../../models/message/message.model";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  public cinema: CinemaModel;

  public cinemaHalls: HallModel[] = [];

  public isLoading: boolean;

  public isHallAdded: boolean = false;


  constructor(private cinemasService: CinemasService,

              public currentLoginService: CurrentLoginService,

              public auth: AuthService,

              private loadingService: LoadingService,

              private alertMessage: AlertMessageService,

              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCinema();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getCinema(): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    const id = this.activateRoute.snapshot.params['id'];

    this._subscriptions.push(this.cinemasService.getFullCinema(id)
          .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
          .subscribe((cinema: FullCinemaModel) => {
              this.cinema = cinema;
              this.cinemaHalls = cinema.halls;
            },
            (error) => this.alertMessage.showMessage(new MessageModel('warning', error.message))));

  }

  public addHall(): void {
    this.isHallAdded = true;

    this.cinemasService.addHallToCinema(this.cinema)
      .pipe(finalize(() => this.isHallAdded = false))
      .subscribe((cinemaHalls: HallModel[]) => this.cinemaHalls = cinemaHalls,
        error => this.alertMessage.showMessage(new MessageModel('warning', error.message)));
  }
}
