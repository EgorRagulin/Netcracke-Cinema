import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {CinemaModel} from "../../../../models/cinema.model";
import {CinemasService} from "../../../../services/cinemas/cinemas.service";
import {LoadingService} from "../../../../services/loading/loading.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public cinemas: CinemaModel[];
  public isLoading: boolean;

  constructor(private cinemasService: CinemasService,
              private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.getCinemas();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getCinemas(): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(this.cinemasService.getCinemas()
      .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
      .subscribe((cinemas: CinemaModel[]) => this.cinemas = cinemas,
        (error) => alert(error.message)));
  }
}
