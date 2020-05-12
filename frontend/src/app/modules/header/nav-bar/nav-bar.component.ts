import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../../services/security/storage.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public storageService: StorageService) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.storageService.clearToken();
    this.storageService.setCurrentLogin(null);
    this.storageService.setCurrentUser(null);
  }
}
