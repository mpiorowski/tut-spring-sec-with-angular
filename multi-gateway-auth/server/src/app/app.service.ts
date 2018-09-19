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

  initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('user').subscribe(data => {
          this.setRole(data);
          if (this.authenticated && this.admin) {
            window.location.href = "http://localhost:8080/admin/";
          } else if (this.authenticated) {
            window.location.href = "http://localhost:8080/ui/";
          }
          else {
            resolve();
          }
        },
        err => {
          resolve();
        }
      );
    });
  }

  setRole(data) {
    this.authenticated = data && data['name'];
    this.user = this.authenticated ? data['name'] : '';
    this.admin = this.authenticated && data['roles'] && data['roles'].indexOf('ROLE_ADMIN') > -1;
  }

  authenticate(credentials, callback) {
    this.http.get('user', {headers: AppService.setHeaders(credentials)}).subscribe(data => {
      this.setRole(data);
      if (callback) {
        callback(data)
      }
    });
  }
}
