import { Component, OnInit } from '@angular/core';
import {WalletModel} from "../../../../models/wallet.model";
import {LoadingService} from "../../../../services/loading/loading.service";
import {WalletService} from "../../../../services/wallet/wallet.service";
import {UsersService} from "../../../../services/users/users.service";

@Component({
  selector: 'app-my-wallet',
  templateUrl: './my-wallet.component.html',
  styleUrls: ['./my-wallet.component.css']
})
export class MyWalletComponent implements OnInit {
  public isLoading: boolean;

  wallet: WalletModel;

  constructor(private walletService: WalletService,
              private userService: UsersService,
              private loadingService: LoadingService,) { }

  ngOnInit(): void {
    this.findWalletByUserId();
  }

  private findWalletByUserId() {

  }
}
