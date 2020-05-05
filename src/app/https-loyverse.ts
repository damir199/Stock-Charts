import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
  } from "@angular/common/http";
  
  import { Injectable } from "@angular/core";
  import { Observable } from "rxjs";
  
  @Injectable()
  export class HttpLoyverseInterceptor implements HttpInterceptor {
    constructor() {}
      intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const urlreq = req.clone({
            url: req.url.replace("http://", "https://")
          
        });
    
        return next.handle(urlreq);
      }
  }
  