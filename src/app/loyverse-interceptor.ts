import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from "@angular/common/http";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class LoyverseInterceptor implements HttpInterceptor {
  constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     const loyreq = req.clone({
        setHeaders: {
          'Content-Type' : 'application/json; charset=utf-8',
          'Accept'       : 'application/json',
          'Access-Control-Allow-Origin' : '*',
          'Authorization': `Bearer 89413ca9050744caa542006c7ffbe835`,
        },
      });
  
      return next.handle(loyreq);
    }
}
