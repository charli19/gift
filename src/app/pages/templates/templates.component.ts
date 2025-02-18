import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { PrimeNG } from 'primeng/config';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
    selector: 'app-templates',
    templateUrl: './templates.component.html',
    styleUrl: './templates.component.scss',
    standalone: true,
    imports: [FileUploadModule, ButtonModule, BadgeModule, ToastModule, CommonModule, DialogModule, PdfViewerModule],
    providers: [MessageService]
})
export class TemplatesComponent {
    files: any[] = [];

    totalSize: number = 0;

    totalSizePercent: number = 0;

    previewVisible: boolean = false; // Controla la visibilidad del dialogo
    pdfSrc: string = '';

    constructor(
        private config: PrimeNG,
        private messageService: MessageService
    ) {}

    choose(event: any, callback: any) {
        callback();
    }

    onRemoveTemplatingFile(event: any, file: any, removeFileCallback: any) {
        removeFileCallback(event);
        this.totalSize -= parseInt(this.formatSize(file.size));
        this.totalSizePercent = this.totalSize / 10;
    }

    onClearTemplatingUpload(clear: any) {
        clear();
        this.totalSize = 0;
        this.totalSizePercent = 0;
    }

    onTemplatedUpload() {
        this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    }

    onSelectedFiles(event: any) {
        this.files = event.currentFiles;
        this.files.forEach((file) => {
            this.totalSize += parseInt(this.formatSize(file.size));
        });
        this.totalSizePercent = this.totalSize / 10;
    }

    uploadEvent(callback: any) {
        callback();
    }

    formatSize(bytes: any) {
        const k = 1024;
        const dm = 3;
        const sizes = this.config.translation.fileSizeTypes;
        if (bytes === 0) {
            return `0 ${sizes![0]}`;
        }

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

        return `${formattedSize} ${sizes![i]}`;
    }

    previewFile(file: any) {
        this.pdfSrc = URL.createObjectURL(file);
        this.previewVisible = true;
    }
}
