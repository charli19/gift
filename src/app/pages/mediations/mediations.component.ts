import { Component, OnInit } from '@angular/core';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
    selector: 'app-mediations',
    templateUrl: './mediations.component.html',
    imports: [TableComponent]
})
export class MediationsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}