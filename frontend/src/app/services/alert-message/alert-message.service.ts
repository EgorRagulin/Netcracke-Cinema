import { Injectable } from '@angular/core';
import {MessageModel} from "../../models/message/message.model";
import {AlertMessageComponent} from "../../modules/alert-message/alert-message/alert-message.component";
import {MatDialog} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  constructor(public dialog: MatDialog,) { }

  public showMessage(message: MessageModel): void {
    this.dialog.open(AlertMessageComponent, {
      data: {
        tittle: message.tittle,
        body: message.body
      }
    });
  }
}
