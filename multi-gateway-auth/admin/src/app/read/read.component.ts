import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  greeting = {};
  data: any;

  constructor(private http: HttpClient) {
    this.getGreeting();
  }

  ngOnInit() {
  }

  getGreeting() {
    this.http.get('/resource').subscribe(data => this.greeting = data);
  }


}
