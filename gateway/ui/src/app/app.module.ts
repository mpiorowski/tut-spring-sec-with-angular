import {BrowserModule} from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {AppService} from './app.service';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    }
}

const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'home',
        // runGuardsAndResolvers: 'always'
    },
    {
        path: 'home', component: HomeComponent,
        // runGuardsAndResolvers: 'always'
    },
    {
        path: 'login', component: LoginComponent,
        // runGuardsAndResolvers: 'always'
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    imports: [
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [RouterModule],
    providers: [AppService, {provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule {
}

