import { Place } from '../place/Place';

export class Row {
  private _rowNumber: number;
  private _numberOfPlaces: number
  private _places: Place[];

  constructor(rowNumber: number, numberOfPlaces: number, places: Place[]) {
    this._rowNumber = rowNumber;
    this._numberOfPlaces = numberOfPlaces;
    this._places = places;
  }

  get rowNumber(): number {
    return this._rowNumber;
  }

  set rowNumber(value: number) {
    this._rowNumber = value;
  }

  get numberOfPlaces(): number {
    return this._numberOfPlaces;
  }

  set numberOfPlaces(value: number) {
    this._numberOfPlaces = value;
  }

  get places(): Place[] {
    return this._places;
  }

  set places(value: Place[]) {
    this._places = value;
  }
}
