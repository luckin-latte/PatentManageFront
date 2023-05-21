import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptors implements HttpInterceptor {

  constructor(
  ) { 
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // console.log('http拦截器');
    
    const userInfo = sessionStorage.getItem('UserInfo') || '';

    const authReq = req.clone({
      headers: req.headers.set(
        'Authorization', userInfo
      )
    })
    return next.handle(authReq)
  }

}
