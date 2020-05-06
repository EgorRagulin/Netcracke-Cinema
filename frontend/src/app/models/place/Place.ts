export class Place {
  private _placeNumber: number;
  private _isSold: boolean;
  private _isReserved: boolean;
  private _isSelected: boolean;

  constructor(placeNumber: number, isSold: boolean, isReserved: boolean, isSelected: boolean) {
    this._placeNumber = placeNumber;
    this._isSold = isSold;
    this._isReserved = isReserved;
    this._isSelected = isSelected;
  }

  get placeNumber(): number {
    return this._placeNumber;
  }

  set placeNumber(value: number) {
    this._placeNumber = value;
  }

  get isSold(): boolean {
    return this._isSold;
  }

  set isSold(value: boolean) {
    this._isSold = value;
  }

  get isReserved(): boolean {
    return this._isReserved;
  }

  set isReserved(value: boolean) {
    this._isReserved = value;
  }

  get isSelected(): boolean {
    return this._isSelected;
  }

  set isSelected(value: boolean) {
    this._isSelected = value;
  }
}
