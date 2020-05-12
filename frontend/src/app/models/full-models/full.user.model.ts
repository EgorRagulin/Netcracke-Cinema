import {LoginModel} from "../login.model";
import {Wallet} from "../Wallet";
import {Ticket} from "../Ticket";
import {UserModel} from "../user.model";

export class FullUserModel {
  id: number;
  pictureUrl: string;
  firstName: string;
  secondName: string;
  email: string;
  phoneNumber: string;
  login: LoginModel;
  wallet: Wallet;
  tickets: Ticket[];


  constructor(user: UserModel, login: LoginModel) {
    this.id = user.id;
    this.pictureUrl = user.pictureUrl;
    this.firstName = user.firstName;
    this.secondName = user.secondName;
    this.email = user.email;
    this.phoneNumber = user.phoneNumber;
    this.login = login;
  }
}
