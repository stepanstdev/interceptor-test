import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> | any {
    console.log('INTERCEPTOR');
    return next.handle(this.addCustomHeaderToRequest(request, 'asd123')).pipe(catchError(error => {
        if (error instanceof HttpErrorResponse) {
          console.log('ERROR IF:', error);
          return throwError(error);
        } else {
          console.log('ERROR ELSE:', error);
          return throwError(error);
        }
      })
    );
  }

  private addCustomHeaderToRequest(request: HttpRequest<any>, value: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        CustomHeader: value
      }
    });
  }
}

