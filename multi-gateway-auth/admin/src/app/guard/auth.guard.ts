import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AppService} from "../app.service";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private app: AppService, private router: Router, private http: HttpClient) {
  }

  error: any;
  authenticated = false;
  writer = false;
  admin = false;
  user: Object = {name: ''};

  authenticate(): Observable<boolean> {
    return this.http.get('user').pipe(
      map(user => {
        this.authenticated = user && user['name'];
        this.writer = this.authenticated && user['roles'] && user['roles'].indexOf('ROLE_WRITER') > 0;
        this.admin = this.authenticated && user['roles'] && user['roles'].indexOf('ROLE_ADMIN') > -1;
        this.user = user;

        this.app.saveRole(this.authenticated, this.writer, this.admin, this.user);

        if (this.authenticated && this.admin) {
          return true;
        } else {
          this.router.navigate(['/unauthenticated']);
          return false;
        }
      }),
      catchError(error => this.handleServerError(error))
    );
  }

  handleServerError(error: any) {
    console.log(error.error || error.json() || error);
    if (error.status === 0) {
      this.error = 'No connection. Verify application is running.';
    } else if (error.status === 401) {
      this.error = 'Unauthorized.';
    } else if (error.status === 403) {
      this.error = 'Forbidden.';
    } else {
      this.error = 'Unknown.';
    }
    this.router.navigate(['/unauthenticated']);
    return of(false);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authenticate();

  }
}
