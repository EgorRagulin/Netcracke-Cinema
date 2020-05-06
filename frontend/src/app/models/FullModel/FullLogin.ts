import {User} from "../User";

export class FullLogin {
  id: number;
  username: string;
  password: string;
  user: User;

  constructor(id: number, username: string, password: string) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}
