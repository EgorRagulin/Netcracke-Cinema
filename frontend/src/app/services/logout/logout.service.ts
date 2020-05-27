import { Injectable } from '@angular/core';
import {StorageService} from "../security/storage.service";
import {CurrentLoginService} from "../current-login/current-login.service";
import {CurrentUserService} from "../current-user/current.user.service";
import {CurrentWalletService} from "../current-wallet/current-wallet.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private storageService: StorageService,
              private currentLoginService: CurrentLoginService,
              private currentUserService: CurrentUserService,
              private currentWalletService: CurrentWalletService,
              private router: Router) { }

  public logout(): void {
    this.storageService.clear();
    this.currentLoginService.clear();
    this.currentUserService.clear();
    this.currentWalletService.clear();
    this.router.navigate(['/sign-in'])
  }
}
