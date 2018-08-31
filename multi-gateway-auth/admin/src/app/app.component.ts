import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: {};

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    this.app.authenticate(response => {
      this.user = response;
      this.message();
    })
  }

  logout() {
    this.app.logout();
    // window.location.href = "/";
    // this.router.navigateByUrl('/login');
  }

  message() {
    if (!this.app.authenticated) {
      this.router.navigate(['/unauthenticated']);
    } else {
      if (this.app.writer) {
        this.router.navigate(['/write']);
      } else {
        this.router.navigate(['/read']);
      }
    }
  }

}
