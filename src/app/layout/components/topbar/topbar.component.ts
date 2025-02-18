import { Component, inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../service/layout.service';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, MenuModule, ButtonModule],
    templateUrl: './topbar.component.html'
})
export class AppTopbar implements OnInit {

    public layoutService = inject(LayoutService);
    private authService = inject(AuthService);

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                items: [
                    {
                        label: 'Ajustes',
                        icon: 'pi pi-cog'
                    },
                    {
                        label: 'Cerrar sesión',
                        icon: 'pi pi-sign-out',
                        command: () => this.onLogoutClick()
                    }
                ]
            }
        ];
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state: any) => ({ ...state, darkTheme: !state.darkTheme }));
    } 

    onLogoutClick(): void {
        this.authService.logout();
    }
}
