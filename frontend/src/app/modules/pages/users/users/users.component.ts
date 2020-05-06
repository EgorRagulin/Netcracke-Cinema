import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {User} from "../../../../models/User";
import {UsersService} from "../../../../services/users/users.service";
import {LoadingService} from "../../../../services/loading/loading.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public users: User[];
  public isLoading: boolean;

  constructor(private usersService: UsersService,
              private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getUsers() {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(this.usersService.getUsers()
      .subscribe(users => {
        this.users = users;
        this.isLoading = this.loadingService.changeLoadingStatus(false);
      }));
  }
}
