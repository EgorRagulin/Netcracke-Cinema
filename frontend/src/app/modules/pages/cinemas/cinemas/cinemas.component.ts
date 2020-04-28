import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Cinema} from "../../../../models/Cinema";
import {CinemasService} from "../../../../services/cinemas/cinemas.service";

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public cinemas: Cinema[];

  constructor(private cinemasService: CinemasService) { }

  ngOnInit(): void {
    this.getCinemas();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getCinemas(): void {
    this._subscriptions.push(this.cinemasService.getCinemas()
      .subscribe(cinemas => this.cinemas = cinemas));
  }
}
