import {Component} from '@angular/core';
import {AppService} from '../app.service';
import {HttpClient} from '@angular/common/http';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {

  title = 'Demo';
  greeting = {};

  constructor(private app: AppService, private http: HttpClient) {
    http.get('resource').subscribe(data => this.greeting = data);
  }

  // constructor used when zuul is not implemented
  // constructor(private app: AppService, private http: HttpClient) {
  //   http.get('token').subscribe(data => {
  //     const token = data['token'];
  //     this.http.get("http://localhost:9000", {headers: new HttpHeaders().set('X-Auth-Token', token)})
  //       .subscribe(response => this.greeting = response);
  //   }, () => {
  //   })
  // }

  authenticated() {
    return this.app.authenticated;
  }

}
