import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {AuthGuard} from "../guard/auth.guard";

@Component({
  selector: 'app-unauthenticated',
  templateUrl: './unauthenticated.component.html',
  styleUrls: ['./unauthenticated.component.css']
})
export class UnauthenticatedComponent implements OnInit {

  error: any = "";

  constructor(private app: AppService, private guard: AuthGuard, private router: Router) {
    if (this.guard.error) {
      this.error = this.guard.error;
    }
    else if (this.app.error) {
      this.error = this.app.error;
    }
    this.app.authenticated ? this.router.navigate(['/']) : {};
  }

  ngOnInit() {
    if (this.error.status === 0) {
      this.error = 'No connection. Verify application is running.';
    } else if (this.error.status === 401) {
      this.error = 'Unauthorized.';
    } else if (this.error.status === 403) {
      this.error = 'Forbidden.';
    } else if (this.error.status === 404) {
      this.error = 'Wrong adress';
    } else {
      this.error = 'Unknown.';
    }
  }

}
