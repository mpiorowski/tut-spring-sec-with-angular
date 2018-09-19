import {Component, OnInit} from '@angular/core';
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

  constructor(private app: AppService, private router: Router) {
  }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['/']);
  }

  logout() {
    this.app.logout();
  }

  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
