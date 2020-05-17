import {HallModel} from "../hall.model";

export class FullCinemaModel {
  id: number;
  name: string;
  address: string;
  picture: string;
  halls: HallModel[];


  constructor(id: number, name: string, address: string, picture: string) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.picture = picture;
  }
}
