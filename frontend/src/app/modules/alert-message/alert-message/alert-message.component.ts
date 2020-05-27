import {Component, Inject, OnInit} from '@angular/core';
import {MessageModel} from "../../../models/message/message.model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public message: MessageModel) {}

  ngOnInit(): void {
  }
}
