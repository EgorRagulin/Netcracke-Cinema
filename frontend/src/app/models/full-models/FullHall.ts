import {Cinema} from "../Cinema";
import {Session} from "../Session";

export class FullHall {
  id: number;
  hallNumber: number;
  cinema: Cinema;
  sessions: Session[];

  constructor(id: number, hallNumber: number, cinema: Cinema) {
    this.id = id;
    this.hallNumber = hallNumber;
    this.cinema = cinema;
  }
}
