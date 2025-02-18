import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Inicio',
                items: [{ label: 'Panel de control', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'Mediación',
                items: [
                    { label: 'En curso', icon: 'pi pi-fw pi-briefcase', routerLink: ['/mediaciones-activas'] },
                    { label: 'Calendario', icon: 'pi pi-fw pi-calendar', routerLink: ['/calendario'] },
                    { label: 'Historial', icon: 'pi pi-fw pi-briefcase', routerLink: ['/historial'] },
                    { label: 'Plantillas', icon: 'pi pi-fw pi-file', class: 'rotated-icon', routerLink: ['/plantillas'] }
                ]
            }   
        ];
    }
}
