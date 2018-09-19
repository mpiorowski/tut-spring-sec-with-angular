import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-changes',
  templateUrl: './changes.component.html',
  styleUrls: ['./changes.component.css']
})
export class ChangesComponent implements OnInit {

  changes: {};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getChanges();
  }

  getChanges() {
    this.http.get("/resource/changes").subscribe(changes => this.changes = changes)
  }

}
