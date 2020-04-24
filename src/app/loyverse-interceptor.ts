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
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers.set("Access-Control-Allow-Origin", "*"),
  
    });

    req = req.clone({
        headers: req.headers.set("Access-Control-Allow-Methods:", "GET"),
  
      });
    
    req = req.clone({
        headers: req.headers.set("Authorization", "Bearer 9413ca9050744caa542006c7ffbe835"),
      
      });
   
    //console.log("hello", req);
    return next.handle(req);
  }
}
