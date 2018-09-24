import {Component} from '@angular/core';
import {AppService} from './app.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private app: AppService) {
    this.app.authenticate();
  }

  logout() {
    return this.app.logout();
  }

}
