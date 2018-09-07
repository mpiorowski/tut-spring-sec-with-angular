import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {AppService} from "./app.service";
import {fadeAnimation} from "./animation/animation.fade";
import {MODULES} from "./app.modules";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent implements OnInit {

  subModules = MODULES;
  selected: any;
  loading = false;

  constructor(private app: AppService, private http: HttpClient, private router: Router) {
    this.app.authenticate().then(() => {
      this.loading = false;
    }, () => {
      this.loading = false;
      this.router.navigate(['/unauthenticated']);
    })
  }

  ngOnInit() {
  }

  isActive(subModule) {
    return this.selected === subModule;
  };

  home() {
    if (!this.app.authenticated) {
      this.router.navigate(['/unauthenticated']);
    } else {
      this.router.navigate(['/']);
    }
  }

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

  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
