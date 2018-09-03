import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-unauthenticated',
  templateUrl: './unauthenticated.component.html',
  styleUrls: ['./unauthenticated.component.css']
})
export class UnauthenticatedComponent implements OnInit {

  error: string;

  constructor(private app: AppService) {
    this.error = this.app.error;
  }

  ngOnInit() {
  }

}
