import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptors implements HttpInterceptor {

  constructor(
  ) { 
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log('http拦截器-userId');
    
    const userInfoString = sessionStorage.getItem('UserInfo');

    let authReq = req;

    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      authReq = req.clone({
        headers: req.headers.set('userId', userInfo.userId)
      });
    } else {
      // 处理 userInfoString 不存在的情况
      authReq = req;
    }

    return next.handle(authReq);
  }

}
