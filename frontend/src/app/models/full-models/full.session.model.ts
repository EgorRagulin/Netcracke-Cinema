import {HallModel} from "../hall.model";
import {MovieModel} from "../movie.model";
import {TicketModel} from "../ticket.model";

export class FullSessionModel {
  id: number;
  date: string;
  time: string;
  mode: string;
  hall: HallModel;
  movie: MovieModel;
  tickets: TicketModel[];

  constructor(id: number, date: string, time: string, mode: string, hall: HallModel, movie: MovieModel) {
    this.id = id;
    this.date = date;
    this.time = time;
    this.mode = mode;
    this.hall = hall;
    this.movie = movie;
  }
}
