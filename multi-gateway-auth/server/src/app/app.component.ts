import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authenticated = false;
  credentials = {username: "", password: ""};
  user = "";
  admin = false;

  constructor(private http: HttpClient, private router: Router) {
    this.authenticate();

    // this.router.navigateByUrl('/red-pill');
  }

  authenticate() {
    const headers = this.credentials.username ? new HttpHeaders().set(
      'authorization', 'Basic ' + btoa(this.credentials.username + ':' + this.credentials.password)
    ) : new HttpHeaders();
    this.http.get('user', {headers: headers}).subscribe(data => {
      this.authenticated = data && data['name'];
      this.user = this.authenticated ? data['name'] : '';
      this.admin = this.authenticated && data['roles'] && data['roles'].indexOf('ROLE_ADMIN') > -1;
    });
    return false;
  }

  login() {
    this.authenticate();
  }

  logout() {
    this.http.post('logout', {}).subscribe(() => {
        this.authenticated = false;
        this.admin = false;
      }
    )
  }

}
