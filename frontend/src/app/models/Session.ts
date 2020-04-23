export class Session {
  id: number;
  mode: string;
  date: string;
  time: string;

  constructor(id: number, date: string, time: string, mode: string) {
    this.id = id;
    this.date = date;
    this.time = time;
    this.mode = mode;
  }
}
