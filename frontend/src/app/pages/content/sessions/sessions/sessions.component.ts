import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from "../../../../services/movies/movies.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {SessionModel} from "../../../../models/session.model";
import {HallsService} from "../../../../services/halls/halls.service";
import {SessionsService} from "../../../../services/sessions/sessions.service";
import {LoadingService} from "../../../../services/loading/loading.service";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit, OnDestroy {
  public sessions: SessionModel[];
  private _subscriptions: Subscription[] = [];
  public isLoading: boolean;

  constructor(private moviesService: MoviesService,
              private hallsService: HallsService,
              private sessionsService: SessionsService,
              private loadingService: LoadingService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const movieId = this.activateRoute.snapshot.params['movieId'];
    const hallId = this.activateRoute.snapshot.params['hallId'];
    if (movieId !== undefined) this.getSessionsByMovie(movieId);
    else if (hallId !== undefined) this.getSessionsByHall(hallId);
    else this.getSessions();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getSessionsByMovie(id: number): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(this.moviesService.getMovieSessions(id)
      .subscribe(sessions => {
        this.sessions = sessions;
        this.isLoading = this.loadingService.changeLoadingStatus(false);
      }));
  }

  private getSessionsByHall(id: number): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(this.hallsService.getSessions(id)
      .subscribe(sessions => {
        this.sessions = sessions;
        this.isLoading = this.loadingService.changeLoadingStatus(false);
      }));
  }

  private getSessions() {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(this.sessionsService.getSessions()
      .subscribe(sessions => {
        this.sessions = sessions;
        this.isLoading = this.loadingService.changeLoadingStatus(false);
      }));
  }
}
