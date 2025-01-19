import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const { baseUrl } = environment;
@Injectable()
class AppInterceptor implements HttpInterceptor {

  // constructor() { }
  API = 'http://localhost:4200'

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.startsWith(this.API)) {
      request = request.clone({
        // url: request.url.replace(this.API, baseUrl),
        withCredentials: true
      })

    }

    return next.handle(request);
  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS
}
