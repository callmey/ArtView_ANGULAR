import { Injectable } from '@angular/core';
import {
HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse,
HttpUserEvent, HttpErrorResponse, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {TokenStorage} from "../services/token.storage";//custom implementation for localstorage
import { map, filter, tap } from 'rxjs/operators';
import "rxjs/add/operator/do";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class Interceptor implements HttpInterceptor {

constructor(private token: TokenStorage, private router: Router) { }

intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

const idToken = localStorage.getItem("id_token");

if (idToken) {
  const cloned = req.clone({
      headers: req.headers.set("Authorization",
          "Bearer " + idToken)
  });

  return next.handle(cloned);
}
else {
  return next.handle(req);
}
}
}
/*
intercept(req: HttpRequest<any>, next: HttpHandler):
Observable <HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
var authReq = req;


    if (this.token.getToken() != null) {
        authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this .token.getToken())});
    }

  /*return next.handle(req).map((event: HttpEvent<any>) => {
    if (event instanceof HttpResponse) {
      // do stuff with response and headers you want
    }
    return event; 
  });

    return next.handle(authReq).pipe(tap(event => {
    if (event instanceof HttpResponse) {
    event.headers.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    event.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    event.headers.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // Request headers you wish to allow
    //event.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization, Origin, Accept, Access-Control-Request-Method, Access-Control-Request-Headers');
    }

    }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
            this.router.navigate(['/login']);
            }
        }
    }
    ));
}

}*/