import {Session} from "../Session";
import {UserModel} from "../user.model";

export class FullTicket {
  id: number;
  rowNumber: number;
  placeNumber: number;
  isSold: boolean;
  cost: number;
  session: Session;
  user: UserModel;

  constructor(rowNumber: number, placeNumber: number, isSold: boolean, cost: number, session: Session, user: UserModel, id?: number) {
    this.rowNumber = rowNumber;
    this.placeNumber = placeNumber;
    this.isSold = isSold;
    this.cost = cost;
    this.session = session;
    this.user = user;
    if (id) this.id = id;
  }
}
