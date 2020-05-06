export class Page<T> {
  private _collectionOfElements: T[];
  private _pageNumber: number;
  private _pageSize: number;
  private _totalElements: number;
  private _totalPages: number;

  get collectionOfElements(): T[] {
    return this._collectionOfElements;
  }

  set collectionOfElements(value: T[]) {
    this._collectionOfElements = value;
  }

  get pageNumber(): number {
    return this._pageNumber;
  }

  set pageNumber(value: number) {
    this._pageNumber = value;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
  }

  get totalElements(): number {
    return this._totalElements;
  }

  set totalElements(value: number) {
    this._totalElements = value;
  }

  get totalPages(): number {
    return this._totalPages;
  }

  set totalPages(value: number) {
    this._totalPages = value;
  }
}
