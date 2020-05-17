import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "./auth-service";

@Injectable({providedIn: "root"})
export class CanActivateService implements CanActivate {

  constructor(private auth: AuthService,
              private router: Router) {}

  public canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }
}
