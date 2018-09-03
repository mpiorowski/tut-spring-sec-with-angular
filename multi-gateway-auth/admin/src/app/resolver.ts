import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class Resolver implements Resolve<Observable<string>> {
  constructor() {
  }

  resolve() {
    return Observable.of('Hello Alligator').delay(2000);
  }
}
