import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {CinemasService} from "../../../../services/cinemas/cinemas.service";
import {ActivatedRoute} from "@angular/router";
import {HallsService} from "../../../../services/halls/halls.service";
import {HallModel} from "../../../../models/hall.model";
import {LoadingService} from "../../../../services/loading/loading.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.css']
})
export class HallsComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public halls: HallModel[];
  public isLoading: boolean;

  constructor(private cinemasService: CinemasService,
              private hallsService: HallsService,
              private loadingService: LoadingService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    if (id === undefined) this.getHalls();
    else this.getHallsFromCinema(id);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getHallsFromCinema(id: number): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(this.cinemasService.getHalls(id)
      .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
      .subscribe(halls => this.halls = halls,
        (error) => alert(error.message)));
  }

  private getHalls(): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(this.hallsService.getHalls()
      .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
      .subscribe(halls => this.halls = halls,
        (error) => alert(error.message)));
  }
}
