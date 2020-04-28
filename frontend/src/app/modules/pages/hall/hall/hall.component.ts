import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Hall} from "../../../../models/Hall";
import {HallsService} from "../../../../services/halls/halls.service";

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public hall: Hall;

  constructor(private hallsService : HallsService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.getHall(id);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getHall(id: number): void {
    this._subscriptions.push(this.hallsService.getHall(id)
      .subscribe(hall => this.hall = hall));
  }
}
