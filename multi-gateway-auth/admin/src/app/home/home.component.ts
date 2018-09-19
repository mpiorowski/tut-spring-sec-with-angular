import {Component, OnInit} from '@angular/core';
import {fadeAnimation} from "../animation/animation.fade";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeAnimation]
})
export class HomeComponent implements OnInit {

  loading = true;

  constructor() {
  }

  ngOnInit() {
    this.loading = false;
  }

  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
