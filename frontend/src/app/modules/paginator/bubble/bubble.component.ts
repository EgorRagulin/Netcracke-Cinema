import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.css']
})
export class BubbleComponent implements OnInit {
  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

}
