import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptors implements HttpInterceptor {

  constructor(
  ) { 
  }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('http拦截器-token');
    
    const userInfoString = sessionStorage.getItem('UserInfo');

    let tokenReq = req;

    if (userInfoString) {
      const userInfo = JSON.parse(userInfoString);
      tokenReq = req.clone({
        headers: req.headers.set('token', userInfo.token)
      });
    } else {
      // 处理 userInfoString 不存在的情况，设置默认的 token 或其他处理逻辑
      tokenReq = req.clone({
        headers: req.headers.set('token', '')
      });
    }

    return next.handle(tokenReq);

  }

}
