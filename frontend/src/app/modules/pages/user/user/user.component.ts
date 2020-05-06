import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../../../models/User";
import {Subscription} from "rxjs";
import {UsersService} from "../../../../services/users/users.service";
import {ActivatedRoute} from "@angular/router";
import {LoadingService} from "../../../../services/loading/loading.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  public user: User;
  private _subscriptions: Subscription[] = [];
  public isLoading: boolean;

  constructor(private usersService: UsersService,
              private loadingService: LoadingService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserById();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getUserById() {
    const id = this.activateRoute.snapshot.params['id'];
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(this.usersService.getUserById(id)
      .subscribe(user => {
        if (!user.picture) user.picture = '../../../../../assets/img/user/noavatar.png';
        this.user = user;
        this.isLoading = this.loadingService.changeLoadingStatus(false);
      }));
  }
}
