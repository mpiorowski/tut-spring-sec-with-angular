import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppService} from "../app.service";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  greeting = {};
  loading = true;

  constructor(private app: AppService, private http: HttpClient) {
    this.getGreeting();
  }

  ngOnInit() {
  }

  getGreeting() {
    this.http.get('/resource').subscribe(data => {
      this.greeting = data;
    }, () => {
    }, () => {
      this.loading = false;
    });
  }


}
