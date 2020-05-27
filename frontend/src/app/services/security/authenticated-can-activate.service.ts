import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth-service";
import {MatDialog} from "@angular/material/dialog";
import {AlertMessageComponent} from "../../modules/alert-message/alert-message/alert-message.component";
import {MessageModel} from "../../models/message/message.model";
import {AlertMessageService} from "../alert-message/alert-message.service";

@Injectable({providedIn: "root"})
export class AuthenticatedCanActivateService implements CanActivate {

  constructor(private auth: AuthService,

              private alertMessageService: AlertMessageService,

              private router: Router) {}

  public canActivate(): boolean {

    if (!this.auth.isAuthenticated()) {
      this.alertMessageService.showMessage(new MessageModel('Attention!!!', 'You should log in first!'));
      this.router.navigate(["sign-in"]);
      return false;
    }
    return true;
  }
}
