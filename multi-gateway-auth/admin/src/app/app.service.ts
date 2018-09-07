import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AppService {

  authenticated = false;
  writer = false;
  error = '';
  user: Object = {name: ''};

  constructor(private http: HttpClient) {
  }

  authenticate() {
    return new Promise((resolve, reject) => {
      this.http.get('/user').toPromise().then(user => {
        this.authenticated = user && user['name'];
        this.writer = this.authenticated && user['roles'] && user['roles'].indexOf('ROLE_WRITER') > 0;
        this.user = user;

        //FOR TESTING - http rejected
        // this.authenticated = false;
        // this.writer = false;
        // reject();

        resolve(true);

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
        reject();
      })
    });
  }

  logout() {
    this.http.post('/logout', {}).subscribe(() => {
        this.authenticated = false;
        window.location.href = "/";
      }
    )
  }
}
