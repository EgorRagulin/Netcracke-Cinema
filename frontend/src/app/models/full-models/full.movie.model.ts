import {SessionModel} from "../session.model";

export class FullMovieModel {
  private _id: number;
  private _title: string;
  private _picture: string;
  private _description: string;
  private _ageLimit: number;
  private _duration: string;
  private _genres: string[] = [];
  private _sessions: SessionModel[];


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get ageLimit(): number {
    return this._ageLimit;
  }

  set ageLimit(value: number) {
    this._ageLimit = value;
  }

  get duration(): string {
    return this._duration ? this._duration.slice(0, 5) : this._duration;
  }

  set duration(value: string) {
    this._duration = value + ':00';
  }

  get genres(): string[] {
    return this._genres;
  }

  set genres(value: string[]) {
    this._genres = value;
  }

  get sessions(): SessionModel[] {
    return this._sessions;
  }

  set sessions(value: SessionModel[]) {
    this._sessions = value;
  }
}
