import {Hall} from "../Hall";

export class FullCinema {
  id: number;
  name: string;
  address: string;
  picture: string;
  halls: Hall[];


  constructor(id: number, name: string, address: string, picture: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.picture = picture;
  }
}
