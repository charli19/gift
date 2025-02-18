import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoaderService } from '../../services/loader.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    imports: [ProgressSpinnerModule, CommonModule]
})
export class LoaderComponent {
    private loaderService = inject(LoaderService);
    loading$ = this.loaderService.loading$;
}
