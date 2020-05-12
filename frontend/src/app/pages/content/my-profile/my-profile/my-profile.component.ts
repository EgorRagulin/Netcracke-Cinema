import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {UserModel} from "../../../../models/user.model";
import {LoadingService} from "../../../../services/loading/loading.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  private _subscriptions: Subscription[] = [];
  public user: UserModel;
  public isLoading: boolean;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);
  }

}
