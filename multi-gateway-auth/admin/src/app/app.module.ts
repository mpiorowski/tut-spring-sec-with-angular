import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Injectable, NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {ReadComponent} from './read/read.component';
import {WriteComponent} from './write/write.component';
import {ChangesComponent} from './changes/changes.component';
import {UnauthenticatedComponent} from './unauthenticated/unauthenticated.component';
import {AppService} from "./app.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'read'},
  {path: 'read', component: ReadComponent},
  {path: 'write', component: WriteComponent},
  {path: 'unauthenticated', component: UnauthenticatedComponent},
  {path: 'changes', component: ChangesComponent},
];

@Injectable()
export class XhrInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    WriteComponent,
    ChangesComponent,
    UnauthenticatedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [AppService, {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
