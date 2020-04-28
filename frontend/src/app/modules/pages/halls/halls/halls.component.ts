import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {CinemasService} from "../../../../services/cinemas/cinemas.service";
import {ActivatedRoute} from "@angular/router";
import {HallsService} from "../../../../services/halls/halls.service";
import {Hall} from "../../../../models/Hall";

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.css']
})
export class HallsComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public halls: Hall[];

  constructor(private cinemasService: CinemasService,
              private hallsService: HallsService,
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
    this._subscriptions.push(this.cinemasService.getHalls(id)
      .subscribe(halls => this.halls = halls));
  }

  private getHalls(): void {
    this._subscriptions.push(this.hallsService.getHalls()
      .subscribe(halls => this.halls = halls));
  }
}
