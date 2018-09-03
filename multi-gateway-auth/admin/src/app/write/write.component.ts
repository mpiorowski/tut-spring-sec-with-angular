import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  greeting = {};
  dataa: any;

  constructor(private http: HttpClient, private activatedRouter: ActivatedRoute) {
    this.getGreeting();
  }

  ngOnInit() {
    this.dataa = this.activatedRouter.snapshot.data;
  }

  getGreeting() {
    this.http.get('/resource').subscribe(data => this.greeting = data);
  }

  update() {
    this.http.post('/resource', {content: this.greeting['content']}).subscribe(data => this.greeting = data);
  }

}
