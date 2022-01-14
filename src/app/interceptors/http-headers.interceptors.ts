import {Injectable} from "@angular/core";
import {HttpHandler, HttpInterceptor, HttpRequest,HttpEvent} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable()
export class HttpHeadersInterceptors implements HttpInterceptor {
  constructor() {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
          setHeaders:{ 'x-rapidapi-key' : '0868c769damsh3320be68af2c9fbp16abe1jsn0432faae6b91',
                        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',

          },
          setParams: {
          key:'3608e176f3f24be0ac9f34bc9a7ef28e',
    }
        });
        return next.handle(req);
  }
}
