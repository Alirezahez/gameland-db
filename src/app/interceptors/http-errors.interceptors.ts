import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, map, Observable, throwError as observableThrowError} from "rxjs";
import {Injectable} from '@angular/core';


@Injectable()

  export class HttpErrorsInterceptor implements HttpInterceptor{
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
        // map(data => {
        //   return data
        // }),
        catchError((err) => {
          console.log(err);
          return observableThrowError(err);
        })
      );
    }
  }

