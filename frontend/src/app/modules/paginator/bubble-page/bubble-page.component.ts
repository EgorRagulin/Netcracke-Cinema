import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-bubble-page',
  templateUrl: './bubble-page.component.html',
  styleUrls: ['./bubble-page.component.css']
})
export class BubblePageComponent implements OnChanges {
  @Input() pageNumber: number;
  @Input() currentPageNumber: number;
  @Output() bobbleBtnClickEvent = new EventEmitter;

  public color: string;

  constructor() { }

  bobbleClick() {
    this.bobbleBtnClickEvent.emit(this.pageNumber);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.color  = this.pageNumber == this.currentPageNumber ? 'primary' : 'accent';
  }
}
