import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the token from localStorage
    // const token = localStorage.getItem('token');
    const token = '095e501c13ff6b53e78fa5013430aba445e3bb09'

    // Clone the request and add the token to the headers if it exists
    if (token) {
      const authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(authReq);
    }

    // If there's no token, just pass the original request
    return next.handle(req);
  }
}