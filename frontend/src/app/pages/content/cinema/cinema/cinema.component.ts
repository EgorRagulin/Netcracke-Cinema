import {Component, OnDestroy, OnInit} from '@angular/core';
import {CinemasService} from "../../../../services/cinemas/cinemas.service";
import {Subscription} from "rxjs";
import {Cinema} from "../../../../models/Cinema";
import {ActivatedRoute} from "@angular/router";
import {LoadingService} from "../../../../services/loading/loading.service";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public cinema: Cinema;
  public isLoading: boolean;


  constructor(private cinemasService: CinemasService,
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

    this._subscriptions.push(this.cinemasService.getCinema(id)
      .subscribe(cinema => {
        this.cinema = cinema;
        this.isLoading = this.loadingService.changeLoadingStatus(false);
      }));
  }
}
