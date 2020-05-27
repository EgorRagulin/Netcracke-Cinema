import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {MoviesService} from "../../../../services/movies/movies.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FullMovieModel} from "../../../../models/full-models/full.movie.model";
import {LoadingService} from "../../../../services/loading/loading.service";
import {FullSessionModel} from "../../../../models/full-models/full.session.model";
import {finalize} from "rxjs/operators";
import {AuthService} from "../../../../services/security/auth-service";
import {CurrentLoginService} from "../../../../services/current-login/current-login.service";
import {MessageModel} from "../../../../models/message/message.model";
import {AlertMessageService} from "../../../../services/alert-message/alert-message.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy{
  private subscription: Subscription;

  public movie: FullMovieModel;
  public movieSessions: FullSessionModel[];

  public isLoading: boolean;

  public addSessionBlock: boolean = false;

  constructor(private moviesService: MoviesService,

              public currentLoginService: CurrentLoginService,

              private loadingService: LoadingService,

              private alertMessage: AlertMessageService,

              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovie();
    this.getSessions();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getMovie(): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    const id = this.activateRoute.snapshot.params['movieId'];

    this.subscription = this.moviesService.getFullMovieById(id)
      .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
      .subscribe(movie => this.movie = movie,
        (error) => this.alertMessage.showMessage(new MessageModel('warning', error.message)));
  }

  private getSessions(): void {
    const id = this.activateRoute.snapshot.params['movieId'];

    this.subscription = this.moviesService.getMovieFullSessions(id)
      .subscribe(sessions => this.movieSessions = sessions,
        (error) => this.alertMessage.showMessage(new MessageModel('warning', error.message)));
  }

  public showAddSessionBlock(): void {
    this.addSessionBlock = true;
  }

  public addNewSessionToMovieSessions(newSession: FullSessionModel) {
    this.addSessionBlock = false;
    this.movieSessions.push(newSession);
  }
}
