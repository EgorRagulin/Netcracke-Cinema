import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Paging } from 'src/app/DTO/paging/Paging';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit{

  @Input() elementsName: string = "Элементов";
  @Input() paging: Paging;
  @Input() showBobblesPaginator: boolean = false;
  @Output() changePageNumberEvent = new EventEmitter;
  @Output() changePageSizeEvent = new EventEmitter;

  public pageSizeOptions: number[];
  public pageSize: number;

  constructor() { }

  ngOnInit(): void {
    this.pageSizeOptions = [
      this.paging.DefaultPageSize,
      this.paging.DefaultPageSize*2,
      this.paging.DefaultPageSize*3,
      this.paging.DefaultPageSize*4
    ]

    this.pageSize = this.paging.pageSize;
  }

  showFirstPage() {
    this.paging.pageNumber = 1;
    this.changePageNumberEvent.emit(this.paging.pageNumber);
  }

  showPreviousPage() {
    this.paging.pageNumber--;
    this.changePageNumberEvent.emit(this.paging.pageNumber);
  }

  showNextPage() {
    this.paging.pageNumber++;
    this.changePageNumberEvent.emit(this.paging.pageNumber);
  }

  public showLastPage() {
    this.paging.pageNumber = this.paging.totalPages;
    this.changePageNumberEvent.emit(this.paging.pageNumber);
  }

  public showPage(pageNumber: number) {
    this.paging.pageNumber = pageNumber;
    this.changePageNumberEvent.emit(pageNumber);
  }

  public changePageSize(pageSize: number) {
    if (pageSize != this.pageSize) this.changePageSizeEvent.emit(pageSize);
  }

  public isLastPage() {
    return this.paging.pageNumber == this.paging.totalPages;
  }
}
