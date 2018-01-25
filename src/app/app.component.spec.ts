import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {NavbarComponent} from './navbar/navbar.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {CookieLawModule} from 'angular2-cookie-law';
import {FooterComponent} from './footer/footer.component';
import {MenuService} from './_services/menu.service';
import {ContentService} from './_services/content.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent 
      ],
      imports: [ 
        CommonModule, 
        RouterTestingModule, 
        NgbDropdownModule.forRoot(),
        CookieLawModule,
        NgbModule,
        NoopAnimationsModule
      ],
      providers:[AppModule, MenuService, ContentService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});
