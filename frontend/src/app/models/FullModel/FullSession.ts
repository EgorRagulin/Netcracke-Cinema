import {Hall} from "../Hall";
import {Movie} from "../Movie";
import {Ticket} from "../Ticket";

export class FullSession {
  id: number;
  date: string;
  time: string;
  mode: string;
  hall: Hall;
  movie: Movie;
  tickets: Ticket[];

  constructor(id: number, date: string, time: string, mode: string, hall: Hall, movie: Movie) {
    this.id = id;
    this.date = date;
    this.time = time;
    this.mode = mode;
    this.hall = hall;
    this.movie = movie;
  }
}
