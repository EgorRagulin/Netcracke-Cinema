import {Component, OnDestroy, OnInit} from '@angular/core';
import {CinemasService} from "../../../../services/cinemas/cinemas.service";
import {Subscription} from "rxjs";
import {Cinema} from "../../../../models/Cinema";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public cinema: Cinema;

  constructor(private cinemasService: CinemasService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.getCinema(id);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getCinema(id: number): void {
    this._subscriptions.push(this.cinemasService.getCinema(id)
      .subscribe(cinema => this.cinema = cinema));
  }
}
