import { Component, OnInit } from '@angular/core';
import {CurrentLoginService} from "../../../services/current-login/current-login.service";
import {LogoutService} from "../../../services/logout/logout.service";
import {AuthService} from "../../../services/security/auth-service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public currentLoginService: CurrentLoginService,

              public auth: AuthService,

              private _logout: LogoutService) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this._logout.logout();
  }
}
