import {User} from "../User";

export class FullWallet {
  id: number;
  name: string;
  balance: number;
  user: User;

  constructor(id: number, name: string, balance: number, user: User) {
    this.id = id;
    this.name = name;
    this.balance = balance;
    this.user = user;
  }
}
