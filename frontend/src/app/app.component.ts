import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/security/auth-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.isLoginAdmin();

    setInterval(() => this.auth.isLoginAdmin(), 5000);
  }
}
