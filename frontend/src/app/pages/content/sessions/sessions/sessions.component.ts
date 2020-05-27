import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from "../../../../services/movies/movies.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {SessionModel} from "../../../../models/session.model";
import {HallsService} from "../../../../services/halls/halls.service";
import {SessionsService} from "../../../../services/sessions/sessions.service";
import {LoadingService} from "../../../../services/loading/loading.service";
import {finalize} from "rxjs/operators";
import {FullSessionModel} from "../../../../models/full-models/full.session.model";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  public sessions: FullSessionModel[];

  public isLoading: boolean;

  constructor(private hallsService: HallsService,

              private loadingService: LoadingService,

              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const hallId = this.activateRoute.snapshot.params['hallId'];
    this.getSessionsByHall(hallId);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getSessionsByHall(id: number): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(this.hallsService.getSessions(id)
      .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
      .subscribe(sessions => this.sessions = sessions));
  }
}
