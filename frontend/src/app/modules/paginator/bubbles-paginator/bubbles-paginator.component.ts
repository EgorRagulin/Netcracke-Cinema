import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-bubbles-paginator',
  templateUrl: './bubbles-paginator.component.html',
  styleUrls: ['./bubbles-paginator.component.css']
})
export class BubblesPaginatorComponent {
  @Input() pageNumber: number;
  @Input() totalPages: number;
  @Input() pageRange: number = 2;
  @Output() pageChangeEvent = new EventEmitter;

  constructor() { }

  public updatePage(pageNumber: number) {
    this.pageChangeEvent.emit(pageNumber);
  }

  public getRange(): number[] {
    let pageNumbers: number[] = [];
    for (let i = -this.pageRange; i <= this.pageRange; i++) {
      let pageNumber = i + this.pageNumber;
      if (pageNumber > 1 && pageNumber < this.totalPages) pageNumbers.push(pageNumber);
    }
    return pageNumbers;
  }
}
