import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LoadingService} from "../../../../services/loading/loading.service";
import {StorageService} from "../../../../services/security/storage.service";
import {Router} from "@angular/router";
import {UserModel} from "../../../../models/user.model";
import {finalize} from "rxjs/operators";
import {LoginService} from "../../../../services/security/login-service";
import {AuthService} from "../../../../services/security/auth-service";
import {CurrentLoginService} from "../../../../services/current-login/current-login.service";
import {CurrentUserService} from "../../../../services/current-user/current.user.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  public user: UserModel;

  public isLoading: boolean;

  constructor(private loadingService: LoadingService,

              public currentLoginService: CurrentLoginService,
              private currentUserService: CurrentUserService,
              public auth: AuthService,

              private loginService: LoginService,

              private router: Router) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private getCurrentUser(): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this._subscriptions.push(this.currentUserService.getCurrentUser()
      .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
      .subscribe((user: UserModel) => {
          if (user == null) this.router.navigate(['create-user'])
          else this.user = user;
        },
        (error) => {
          alert(error.message);
          this.router.navigate(['create-user']);
        }));
  }
}
