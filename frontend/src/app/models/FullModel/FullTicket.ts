import {Session} from "../Session";
import {User} from "../User";

export class FullTicket {
  id: number;
  rowNumber: number;
  placeNumber: number;
  isSold: boolean;
  cost: number;
  session: Session;
  user: User;

  constructor(rowNumber: number, placeNumber: number, isSold: boolean, cost: number, session: Session, user: User, id?: number) {
    this.rowNumber = rowNumber;
    this.placeNumber = placeNumber;
    this.isSold = isSold;
    this.cost = cost;
    this.session = session;
    this.user = user;
    if (id) this.id = id;
  }
}
