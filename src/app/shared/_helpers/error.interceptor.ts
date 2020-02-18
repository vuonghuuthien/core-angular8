import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError(err => {
                if (err.status === 401) {
                    // auto logout if 401 response returned from api
                    localStorage.removeItem('currentUser');
                    this.router.navigate(['login']);
                    // location.reload(true);
                }
                if (err.status === 400) {
                }
                if (err.status === 404) {
                }
                if (err.status === 422) {
                    if (err.error.message) {
                    } else {
                    }
                }
                if (err.status === 402) {
                }
                if (err.status === 504) {
                }
                // console.clear();
                const error = err.error.message || err.statusText;
                return throwError(error);
            }));
    }
}