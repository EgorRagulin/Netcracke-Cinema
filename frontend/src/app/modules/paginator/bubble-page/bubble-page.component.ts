import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bubble-page',
  templateUrl: './bubble-page.component.html',
  styleUrls: ['./bubble-page.component.css']
})
export class BubblePageComponent implements OnInit {
  @Input() pageNumber: number;
  @Input() currentPageNumber: number;
  @Output() bobbleBtnClickEvent = new EventEmitter;

  public color: string = 'accent';

  constructor() { }

  ngOnInit(): void {
     if (this.pageNumber == this.currentPageNumber) this.color = 'primary';
  }

  bobbleClick() {
    this.bobbleBtnClickEvent.emit(this.pageNumber);
  }
}
