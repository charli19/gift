import { Component, inject, OnInit } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-callback',
    template: ``,
    imports: [ProgressSpinnerModule]
})
export class CallbackComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private authService = inject(AuthService);

    ngOnInit(): void {
        this.callback();
    }

    callback(): void {
        this.route.queryParams.subscribe((params) => {
            const code = params['code'];
            const accessToken = params['access_token'];
            if (code) {
                this.authService.getToken(code);
            } else if (accessToken) {
                localStorage.setItem('access_token', accessToken);
                this.router.navigate(['/']);
            }
        });
    }
}
