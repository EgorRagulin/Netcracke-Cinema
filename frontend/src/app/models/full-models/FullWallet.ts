import {UserModel} from "../user.model";

export class FullWallet {
  id: number;
  name: string;
  balance: number;
  user: UserModel;

  constructor(id: number, name: string, balance: number, user: UserModel) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.user = user;
  }
}
