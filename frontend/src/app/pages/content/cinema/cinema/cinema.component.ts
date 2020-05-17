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
import {HallsService} from "../../../../services/halls/halls.service";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public cinema: CinemaModel;
  public cinemaHalls: HallModel[];
  public isLoading: boolean;
  public isHallAdding: boolean;


  constructor(private cinemasService: CinemasService,
              public auth: AuthService,
              private loadingService: LoadingService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCinema();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getCinema(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(this.cinemasService.getFullCinema(id)
          .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
          .subscribe((cinema: FullCinemaModel) => {
              this.cinema = cinema;
              this.cinemaHalls = cinema.halls;
            },
            (error) => alert(error.message)));
  }

  public addHall(): void {
    this.cinemasService.addHallToCinema(this.cinema)
      .pipe(finalize(() => this.isHallAdding = false))
      .subscribe((cinemaHalls: HallModel[]) => this.cinemaHalls = cinemaHalls,
        error => alert(error.message));
  }
}
