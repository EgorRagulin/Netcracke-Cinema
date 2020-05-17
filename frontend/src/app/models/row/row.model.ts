import { PlaceModel } from '../place/place.model';

export class RowModel {
  private _rowNumber: number;
  private _numberOfPlaces: number
  private _places: PlaceModel[];

  constructor(rowNumber: number, numberOfPlaces: number, places: PlaceModel[]) {
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

  get places(): PlaceModel[] {
    return this._places;
  }

  set places(value: PlaceModel[]) {
    this._places = value;
  }
}
