import {User} from "./User";
import {Session} from "./Session";

export class Ticket {
  id: number;
  rowNumber: number;
  placeNumber: number;
  cost: number;
  session: Session;
  user: User;

  constructor(rowNumber: number, placeNumber: number, cost: number, session: Session, user: User) {
    this.placeNumber = placeNumber;
    this.rowNumber = rowNumber;
    this.cost = cost;
    this.session = session;
    this.user = user;
  }
}
