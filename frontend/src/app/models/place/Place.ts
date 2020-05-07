import {PlaceStatus} from "../../enum/PlaceStatus";

export class Place {
  private _placeNumber: number;
  private _placeStatus: PlaceStatus;

  constructor(placeNumber: number, placeStatus: PlaceStatus) {
    this._placeNumber = placeNumber;
    this._placeStatus = placeStatus;

  }

  get placeNumber(): number {
    return this._placeNumber;
  }

  set placeNumber(value: number) {
    this._placeNumber = value;
  }

  get placeStatus(): PlaceStatus {
    return this._placeStatus;
  }

  set placeStatus(value: PlaceStatus) {
    this._placeStatus = value;
  }
}
