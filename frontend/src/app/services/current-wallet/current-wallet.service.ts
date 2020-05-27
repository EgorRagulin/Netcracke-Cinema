import { Injectable } from '@angular/core';
import {WalletModel} from "../../models/wallet.model";
import {UserService} from "../user/user.service";
import {CurrentUserService} from "../current-user/current.user.service";
import {AsyncSubject, Subject} from "rxjs";
import {Router} from "@angular/router";
import {AlertMessageService} from "../alert-message/alert-message.service";
import {MessageModel} from "../../models/message/message.model";
import {WalletService} from "../wallet/wallet.service";
import {FullWalletModel} from "../../models/full-models/full.wallet.model";

@Injectable({
  providedIn: 'root'
})
export class CurrentWalletService {
  private _currentWallet: WalletModel

  constructor(private userService: UserService,
              private walletService: WalletService,
              private currentUserService: CurrentUserService,

              private alertMessage: AlertMessageService,

              private router: Router) { }

  public getCurrentWallet(): Subject<WalletModel> {
      const sbjUser = new AsyncSubject<WalletModel>();
      if (!this._currentWallet) {
        this.currentUserService.getCurrentUser().subscribe(user =>
          this.userService.getWalletByUserId(user.id).subscribe(wallet => {
            if (wallet != null) {
              this._currentWallet = wallet;
              sbjUser.next(wallet);
              sbjUser.complete();
            }
            else this.router.navigate(['create-wallet']);
          }));
      } else {
        sbjUser.next(this._currentWallet);
        sbjUser.complete();
      }
      return sbjUser;
  }

  public pay(cost: number): Subject<boolean> {
    const sbjPayStatus = new AsyncSubject<boolean>();
    this.getCurrentWallet().subscribe(wallet => {
      if (wallet.balance >= cost) {

        wallet.balance -= cost;
        this.currentUserService.getCurrentUser().subscribe(currentUser => {
          this.walletService.saveWalletInDb(new FullWalletModel(wallet, currentUser)).subscribe(() => {
            sbjPayStatus.next(true);
            sbjPayStatus.complete();
          })
        })
      }
      else {
        sbjPayStatus.next(false);
        sbjPayStatus.complete();
        this.alertMessage.showMessage(new MessageModel('Attention!', 'not enough money'));
      }
    });
    return sbjPayStatus;
  }

  public setCurrentWallet(wallet: WalletModel): void {
    this._currentWallet = wallet;
  }

  public clear(): void {
    this._currentWallet = null;
  }
}
