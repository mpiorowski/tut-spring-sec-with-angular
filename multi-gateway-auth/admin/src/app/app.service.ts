import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AppService {

  authenticated = false;
  admin = false;
  writer = false;
  error = '';
  data = {};

  constructor(private http: HttpClient) {
  }

  authenticate(callback) {
    this.http.get('/user').subscribe(data => {
      this.authenticated = data && data['name'];
      this.writer = this.authenticated && data['roles'] && data['roles'].indexOf('ROLE_WRITER') > 0;
      this.data = data;

      if (callback) {
        callback(data)
      }
    }, error => {
      if (error.status === 0) {
        this.error = 'No connection. Verify application is running.';
      } else if (error.status === 401) {
        this.error = 'Unauthorized.';
      } else if (error.status === 403) {
        this.error = 'Forbidden.';
      } else {
        this.error = 'Unknown.';
      }
      this.authenticated = false;
      this.writer = false;
      // }
      // , () => {
      //   callback(this.data);
    })
  }

  logout() {
    this.http.post('/logout', {}).subscribe(() => {
        this.authenticated = false;
        this.admin = false;
        window.location.href = "/";
      }
    )
  }
}
