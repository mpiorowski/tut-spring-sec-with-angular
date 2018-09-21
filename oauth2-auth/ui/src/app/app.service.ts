import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate() {
    this.http.get('user').subscribe(response => {
        if (response['name']) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
      }, () => {this.authenticated = false;}
    );
  }

  logout() {
    this.http.post('logout', {}).finally(() => {
      this.authenticated = false;
      this.http.post('http://localhost:9999/uaa/logout', {}, {withCredentials: true})
        .subscribe(() => {
          console.log('Logged out');
        });
    }).subscribe();
  };

}
