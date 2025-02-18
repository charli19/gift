import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router,
        private cookieService: CookieService
    ) {}

    async canActivate(_next: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Promise<boolean> {
        const accessToken: string | null = localStorage.getItem('access_token');
        if (accessToken) {
            return true;
        } else {
            this.authService.authorize();
            return false;
        }
    }
}
