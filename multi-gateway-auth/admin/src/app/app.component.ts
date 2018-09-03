import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: {};

  subModules = [
    {name: "UI", href: "/ui/"},
    {name: "writer", component: "write"},
    {name: "reader", component: "read"},
  ];
  selected: any;

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    this.app.authenticate(response => {
      this.user = response;
    })
  }

  isActive(subModule) {
    return this.selected === subModule;
  };

  select(subModule) {
    this.selected = subModule;
    this.navigateByModule(subModule);
  };

  navigateByModule(subModule) {
    if (!this.app.authenticated) {
      this.router.navigate(['/unauthenticated']);
    } else if (subModule.component) {
      this.router.navigate(['/' + subModule.component]);
    } else if (subModule.href) {
      window.location.href = subModule.href;
    } else {
      this.router.navigate(['/unauthenticated']);
    }
  }

  logout() {
    this.app.logout();
  }

}
