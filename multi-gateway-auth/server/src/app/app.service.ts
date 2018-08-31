import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class AppService {

  authenticated = false;
  user = "";
  admin = false;

  constructor(private http: HttpClient) {
  }

  static setHeaders(credentials) {
    return credentials.username ? new HttpHeaders().set(
      'authorization', 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    ) : new HttpHeaders();
  }

  authenticate(credentials, callback) {
    this.http.get('user', {headers: AppService.setHeaders(credentials)}).subscribe(data => {
      this.authenticated = data && data['name'];
      this.user = this.authenticated ? data['name'] : '';
      this.admin = this.authenticated && data['roles'] && data['roles'].indexOf('ROLE_ADMIN') > -1;

      if (callback) {
        callback(data)
      }
    });
  }

  logout(callback) {
    this.http.post('logout', {}).subscribe(() => {
      this.authenticated = false;
      this.admin = false;
      // if (callback) {callback()};
    }, () => {
    }, () => {
      callback()
    })
  }
}
