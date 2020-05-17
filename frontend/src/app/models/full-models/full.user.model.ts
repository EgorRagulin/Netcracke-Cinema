import {LoginModel} from "../login.model";
import {WalletModel} from "../wallet.model";
import {TicketModel} from "../ticket.model";
import {UserModel} from "../user.model";

export class FullUserModel {
  id: number;
  firstName: string;
  secondName: string;
  email: string;
  phoneNumber: number;
  avatar: string;
  login: LoginModel;
  wallet: WalletModel;
  tickets: TicketModel[];


  constructor(user: UserModel, login: LoginModel) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.secondName = user.secondName;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
    this.avatar = user.avatar;
    this.login = login;
  }
}
