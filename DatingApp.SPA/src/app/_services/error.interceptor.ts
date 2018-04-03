import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HTTP_INTERCEPTORS   } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()

export class ErrorInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        let clone: HttpRequest<any>;
        // tslint:disable-next-line:max-line-length -- added tofix bug in prod mode to append auth header in request
        if (token) {clone = req.clone({setHeaders: {Accept: `application/json`, 'Content-Type': `application/json`, Authorization: `Bearer ${token}`}}); } else {clone = req.clone({setHeaders: {Accept: `application/json`, 'Content-Type': `application/json` } }); }
        return next.handle(clone).catch(error => {
            if (error instanceof HttpErrorResponse) {
                // if (error.status === 400) {return Observable.throw(error._body); }
                const applicationError = error.headers.get('Application-Error');
                if (applicationError) {return Observable.throw(applicationError); }
                const serverError = error.error;
                let modelStateErrors = '';
                if (serverError && typeof serverError === 'object') {for (const key in serverError) {if (serverError[key]) {modelStateErrors += serverError[key] + '\n'; } }}
                return Observable.throw(modelStateErrors || serverError || 'Server error');
            }
        });
    }
}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};

