import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {AppService} from "../app.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        AppService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch data from backend', async(() => {
      const http = TestBed.get(HttpTestingController);
      // const fixture = TestBed.createComponent(HomeComponent);
      const app = fixture.debugElement.componentInstance;
      http.expectOne('resource').flush({id: 'XYZ', content: 'Hello'});
      expect(app.greeting.content).toContain('Hello');
    })
  );
});
