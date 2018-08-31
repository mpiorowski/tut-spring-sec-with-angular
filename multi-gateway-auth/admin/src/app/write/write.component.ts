import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  greeting = {};

  constructor(private http: HttpClient) {
    this.getGreeting();
  }

  ngOnInit() {
  }

  getGreeting() {
    this.http.get('http://localhost:9000').subscribe(data => this.greeting = data);
  }

  update() {
    this.http.post('/resource', {content: this.greeting['content']}).subscribe(data => this.greeting = data);
  }

}
