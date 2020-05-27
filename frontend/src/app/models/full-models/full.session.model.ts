import {HallModel} from "../hall.model";
import {MovieModel} from "../movie.model";
import {TicketModel} from "../ticket.model";

export class FullSessionModel {
  id: number;
  cost: number;
  date: string;
  time: string;
  hall: HallModel;
  movie: MovieModel;
  tickets: TicketModel[];

  constructor(cost: number, fullDate: Date, hall: HallModel, movie: MovieModel) {
    this.cost = cost;
    this.date = this.getSqlDate(fullDate);
    this.time = this.getSqlTime(fullDate);
    this.hall = hall;
    this.movie = movie;
  }

  private getSqlDate(fullDate: Date) {
    let day = (fullDate.getDay() < 10) ? '0' + fullDate.getDay() : fullDate.getDay();
    let month = (fullDate.getMonth() < 10) ? '0' + fullDate.getMonth() : fullDate.getMonth();
    return fullDate.getFullYear() + '-' + month + '-' + day;
  }

  private getSqlTime(fullDate: Date) {
    return fullDate.getHours() + ':' + fullDate.getMinutes() + ':' + fullDate.getSeconds();
  }
}
