import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {
  @Input() isLoading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
