import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { API_URL, TOKEN_NAME_LS } from '../const';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("HOLALALALLALALA");
    if (req.url.includes(API_URL)) {
      const idToken = localStorage.getItem(TOKEN_NAME_LS);
      console.log(idToken);
      if (idToken) {
        const cloned = req.clone({
          headers: req.headers.set("Authorization", idToken)
        });
        return next.handle(cloned).pipe(
          catchError(this.handleError())
        );
      }
    }

    return next.handle(req).pipe(
      catchError(this.handleError())
    );
  }

  private handleError() {
    return (error: HttpErrorResponse) => {
      if (error.error.name == 'NoJWT' || error.error.name == 'JWTInvalid') {
        this.router.navigateByUrl('/login');
      };
      throw error;
    }
  }

}