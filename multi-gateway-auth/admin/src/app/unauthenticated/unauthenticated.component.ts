import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-unauthenticated',
  templateUrl: './unauthenticated.component.html',
  styleUrls: ['./unauthenticated.component.css']
})
export class UnauthenticatedComponent implements OnInit {

  error: string;

  constructor(private app: AppService, private router: Router) {
    this.error = this.app.error;
    this.app.authenticated ? this.router.navigate(['/']) : {};
  }

  ngOnInit() {
  }

}
