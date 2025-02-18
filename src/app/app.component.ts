import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { LoaderComponent } from './shared/components/loader/loader.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule, ToggleSwitchModule, CommonModule, LoaderComponent],
    template: `
        <app-loader></app-loader>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = 'mediadores-front';
}
