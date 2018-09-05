import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthResolver implements Resolve<Promise<any>> {
  constructor(private http: HttpClient) {
  }

  res: any;

  auth() {
    let promise = new Promise((resolve, reject) => {
      this.http.get('/user').toPromise().then(res => {
          this.res = res;

          // setTimeout(()=>console.log(res), 2000);
          resolve(res);
        },
        msg => { // Error
          reject(msg);
        })
    });

    return promise;


    // return new Promise ((resolve,reject) => {
    //   this.http.get('/user').subscribe(data => {
    //       resolve(data);
    //     }
    //   )
    // })
  }

  resolve(): Promise<any> {
    return this.auth();
  }
}
