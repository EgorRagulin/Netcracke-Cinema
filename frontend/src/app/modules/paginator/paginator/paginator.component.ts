import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Paginator} from "../../../models/paginator/Paginator";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit{

  @Input() elementsName: string = "Элементов";
  @Input() paginator: Paginator;
  @Input() showBobblesPaginator: boolean = false;
  @Output() changePageNumberEvent = new EventEmitter;
  @Output() changePageSizeEvent = new EventEmitter;

  public pageSizeOptions: number[];
  public pageSize: number;

  constructor() { }

  ngOnInit(): void {
    this.pageSizeOptions = [
      this.paginator.defaultPageSize,
      this.paginator.defaultPageSize*2,
      this.paginator.defaultPageSize*3,
      this.paginator.defaultPageSize*4
    ]

    this.pageSize = this.paginator.pageSize;
  }

  showFirstPage() {
    this.paginator.pageNumber = 1;
    this.changePageNumberEvent.emit(this.paginator.pageNumber);
  }

  showPreviousPage() {
    this.paginator.pageNumber--;
    this.changePageNumberEvent.emit(this.paginator.pageNumber);
  }

  showNextPage() {
    this.paginator.pageNumber++;
    this.changePageNumberEvent.emit(this.paginator.pageNumber);
  }

  public showLastPage() {
    this.paginator.pageNumber = this.paginator.totalPages;
    this.changePageNumberEvent.emit(this.paginator.pageNumber);
  }

  public showPage(pageNumber: number) {
    this.paginator.pageNumber = pageNumber;
    this.changePageNumberEvent.emit(pageNumber);
  }

  public changePageSize(pageSize: number) {
    if (pageSize != this.pageSize) this.changePageSizeEvent.emit(pageSize);
  }

  public isLastPage() {
    return this.paginator.pageNumber == this.paginator.totalPages;
  }
}
