import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { finalize } from 'rxjs';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private http = inject(HttpClient);
    private loaderService = inject(LoaderService);
    private router = inject(Router);

    authorize(): any {
        const { authServerUrl, authorizationEndpoint, responseType, clientId, scope, redirectUri } = environment;

        const params = new URLSearchParams({
            response_type: responseType,
            client_id: clientId,
            scope: scope,
            redirect_uri: redirectUri
        });

        const uri = `${authServerUrl}${authorizationEndpoint}?${params}`;
        window.location.href = uri;
    }

    getToken(code: string): void {
        this.loaderService.show();
        const { authServerUrl, clientId, clientSecret, grantType, redirectUri, scope, tokenEndpoint } = environment;
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`)
        });
        const body = new URLSearchParams({
            grant_type: grantType,
            code: code,
            redirect_uri: redirectUri,
            scope: scope
        });
        const uri = `${authServerUrl}${tokenEndpoint}`;

        this.http
            .post(uri, body, { headers })
            .pipe(
                finalize(() => {
                    this.loaderService.hide();
                })
            )
            .subscribe({
                next: (token: any) => {
                    if (token) {
                        localStorage.setItem('access_token', token.access_token);
                    }
                    this.router.navigate(['/']);
                }
            });
    }

    logout(): void {
        this.loaderService.show();
        const { logoutUrl } = environment;
        localStorage.removeItem('access_token');
        window.location.href = logoutUrl;
        this.loaderService.hide();
    }

    generateRandomString(length: number) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    async generateCodeChallenge(codeVerifier: any) {
        var digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier));
        return btoa(String.fromCharCode(...new Uint8Array(digest)))
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
    }
}
