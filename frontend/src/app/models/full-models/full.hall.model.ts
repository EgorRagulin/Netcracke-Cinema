import {CinemaModel} from "../cinema.model";
import {SessionModel} from "../session.model";

export class FullHallModel {
  id: number;
  hallNumber: number;
  cinema: CinemaModel;
  sessions: SessionModel[];

  constructor(id: number, hallNumber: number, cinema: CinemaModel) {
    this.id = id;
    this.hallNumber = hallNumber;
    this.cinema = cinema;
  }
}
