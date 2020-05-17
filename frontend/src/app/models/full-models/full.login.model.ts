import {UserModel} from "../user.model";

export class FullLoginModel {
  id: number;
  username: string;
  password: string;
  role: string
  user: UserModel;
}
