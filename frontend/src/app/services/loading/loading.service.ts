import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  private changeContentOpacity(isLoading: boolean): void {
    let page = document.getElementsByClassName('page') as HTMLCollectionOf<HTMLElement>;

    if (page.length != 0) {
      page[0].style.opacity = isLoading ? "0.1" : "1";
    }
  }

  public changeLoadingStatus(status: boolean): boolean {
    let isLoading = status;
    this.changeContentOpacity(isLoading);
    return isLoading;
  }
}
