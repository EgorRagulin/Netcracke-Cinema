import {MovieModel} from "../movie.model";

export interface CompleteTicket {
  ticketId: number;
  sessionId: number;
  cinemaName: string;
  cinemaAddress: string;
  hallNumber: number;
  placeNumber: number;
  rowNumber: number;
  isSold: boolean;
  sessionDate: string;
  sessionTime: string;
  movie: MovieModel;
}
