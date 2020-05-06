import {Page} from "../page/Page";

export class Paginator {
  private _defaultPageSize: number;
  private _pageNumber: number;
  private _pageSize: number;
  private _totalElements: number;
  private _totalPages: number;

  constructor(defaultPageSize: number, page: Page<any>) {
    this._defaultPageSize = defaultPageSize;
    this._pageNumber = page.pageNumber;
    this._pageSize = page.pageSize;
    this._totalElements = page.totalElements;
    this._totalPages = page.totalPages;
  }

  get defaultPageSize(): number {
    return this._defaultPageSize;
  }

  set defaultPageSize(value: number) {
    this._defaultPageSize = value;
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
