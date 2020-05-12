import {Session} from "../Session";

export class FullMovie {
  id: number;
  title: string;
  picture: string;
  description: string;
  ageLimit: number;
  duration: string;
  genres: string[];
  sessions: Session[];

  constructor(id: number, title: string, picture: string, description: string, ageLimit: number, duration: string, genres: string[]) {
    this.id = id;
    this.title = title;
    this.picture = picture;
    this.description = description;
    this.ageLimit = ageLimit;
    this.duration = duration;
    this.genres = genres;
  }
}
