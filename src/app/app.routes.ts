import { Routes } from '@angular/router';
import { AppLayout } from './layout/components/app.layout';
import { AuthGuard } from './core/guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: AppLayout,
        canActivate: [AuthGuard],
        children: [
            { path: 'mediaciones-activas', loadComponent: () => import('./pages/mediations/mediations.component').then((c) => c.MediationsComponent) },
            { path: 'calendario', loadComponent: () => import('./pages/calendar/calendar.component').then((c) => c.CalendarComponent) },
            { path: 'historial', loadComponent: () => import('./pages/history/history.component').then((c) => c.HistoryComponent) },
            { path: 'plantillas', loadComponent: () => import('./pages/templates/templates.component').then((c) => c.TemplatesComponent) }
        ]
    },
    {
        path: 'callback',
        loadComponent: () => import('./core/auth/callback/callback.component').then((c) => c.CallbackComponent)
    },
    { path: '**', redirectTo: '' }
];
