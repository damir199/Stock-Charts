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
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      "Content-Type": ["application/json", "application/json"],
      "Allow-Access-Control-Origin": "*",
      Authorization: "Bearer e94aa48bb1354481a91b2182aaac0f31",
    });

    const clone = req.clone({
      headers: headers,
    });

    return next.handle(clone);
  }
}
