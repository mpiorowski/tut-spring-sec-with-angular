import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authenticated = false;
  admin = false;
  credentials = {username: "", password: ""};

  constructor(private app: AppService, private router: Router) {
    this.login();
  }

  login() {
    return this.app.authenticate(this.credentials, () => {
      this.authenticated = this.app.authenticated;
      this.admin = this.app.admin;
      if (this.authenticated && this.admin) {
        window.location.href = "http://localhost:8080/admin/";
      } else if (this.authenticated) {
        window.location.href = "http://localhost:8080/ui/";
      }
    });
  }

  logout() {
    return this.app.logout(() => {
      this.authenticated = this.app.authenticated;
    });
  }
}
