import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer YOUR_TOKEN_HERE')
        });

        console.log('HTTP Request started');

        return next.handle(clonedRequest).pipe(
            finalize(() => console.log('HTTP Request completed'))
        );
    }
}