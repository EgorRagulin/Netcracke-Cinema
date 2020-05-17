import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../services/security/storage.service";
import {AuthService} from "../../../services/security/auth-service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public storageService: StorageService,
              public auth: AuthService) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.auth.logout();
  }
}
