import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() length: number;
  @Input() pageSize: number;
  @Input() pageSizeOptions: number[];

  constructor() { }

  ngOnInit(): void {
  }

}
