import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HallModel} from "../../../../models/hall.model";
import {HallsService} from "../../../../services/halls/halls.service";
import {LoadingService} from "../../../../services/loading/loading.service";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public hall: HallModel;
  public isLoading: boolean;

  constructor(private hallsService : HallsService,
              private loadingService: LoadingService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getHall();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getHall(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(this.hallsService.getHall(id)
      .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
      .subscribe((hall: HallModel) => this.hall = hall,
        (error) => alert(error.message)));
  }
}
