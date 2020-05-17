import {UserModel} from "../user.model";
import {WalletModel} from "../wallet.model";

export class FullWalletModel {
  id: number;
  name: string;
  balance: number;
  user: UserModel;

  constructor(wallet: WalletModel, user: UserModel) {
    this.id = wallet.id;
    this.name = wallet.name;
    this.balance = wallet.balance;
    this.user = user;
  }
}
