import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../../../models/User";
import {Subscription} from "rxjs";
import {UsersService} from "../../../../services/users/users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  public user: User;
  private _subscriptions: Subscription[] = [];
  public opened = false;

  constructor(private usersService: UsersService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.getUserById(id);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getUserById(id: number) {
    this._subscriptions.push(this.usersService.getUserById(id)
      .subscribe(user => {
        if (!user.picture) user.picture = '../../../../../assets/img/user/noavatar.png';
        this.user = user
      }));
  }
}
