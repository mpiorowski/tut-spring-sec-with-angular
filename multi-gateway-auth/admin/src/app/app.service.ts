import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AppService {

  authenticated = false;
  writer = false;
  admin = false;
  error: any;
  user: Object = {name: ''};

  constructor(private http: HttpClient) {
  }

  saveRole(authenticated, writer, admin, user) {
    this.authenticated = authenticated;
    this.writer = writer;
    this.admin = admin;
    this.user = user;
  }

  logout() {
    this.http.post('/logout', {}).subscribe(() => {
        this.authenticated = false;
        window.location.href = "/";
      }
    )
  }
}
