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

  authenticate(): Observable<boolean> {
    return this.http.get('user').pipe(
      map(() => {
        return true;
      }),
      catchError(error => this.handleServerError(error))
    );
  }

  handleServerError(error: any) {
    console.log(error.error || error.json() || error);
    this.error = error;
    this.router.navigate(['/unauthenticated']);
    return of(false);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authenticate();

  }
}
