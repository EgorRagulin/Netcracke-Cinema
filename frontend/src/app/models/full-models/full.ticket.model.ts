import {SessionModel} from "../session.model";
import {UserModel} from "../user.model";

export class FullTicketModel {
  id: number;
  rowNumber: number;
  placeNumber: number;
  isSold: boolean;
  session: SessionModel;
  user: UserModel;

  constructor(rowNumber: number, placeNumber: number, isSold: boolean, session: SessionModel, user: UserModel, id?: number) {
    this.rowNumber = rowNumber;
    this.placeNumber = placeNumber;
    this.isSold = isSold;
    this.session = session;
    this.user = user;
    if (id) this.id = id;
  }
}
