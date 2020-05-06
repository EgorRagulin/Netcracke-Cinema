import {Login} from "../Login";
import {Wallet} from "../Wallet";
import {Ticket} from "../Ticket";

export class FullUser {
  id: number;
  picture: string;
  firstName: string;
  secondName: string;
  role: string;
  login: Login;
  wallet: Wallet;
  tickets: Ticket[];

  constructor(id: number, picture: string, firstName: string, secondName: string, role: string, login: Login, wallet: Wallet) {
    this.id = id;
    this.picture = picture;
    this.firstName = firstName;
    this.secondName = secondName;
    this.role = role;
    this.login = login;
    this.wallet = wallet;
  }
}
