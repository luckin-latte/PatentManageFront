import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HttpClientModule, HttpClientJsonpModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthInterceptors } from './http-interceptors/auth.interceptors';
import { LayoutModule } from './layout/layout.module';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule, 
    BrowserAnimationsModule,
    LayoutModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN }, 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptors, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
