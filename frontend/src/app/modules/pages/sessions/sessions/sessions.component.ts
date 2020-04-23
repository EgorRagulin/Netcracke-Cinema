import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../../../services/movie/movie.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Session} from "../../../../models/Session";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit, OnDestroy {
  public sessions: Session[];
  private subscription: Subscription

  constructor(private movieService: MovieService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const movieId = this.activateRoute.snapshot.params['movieId'];
    this.getSessions(movieId);
  }

  private getSessions(id: number): void {
    this.subscription = this.movieService.getMovieSessions(id)
      .subscribe(sessions => {this.sessions = sessions;
      console.log(sessions)});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
