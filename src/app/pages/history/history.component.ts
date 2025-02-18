import { Component, OnInit } from '@angular/core';
import { TableComponent } from 'src/app/shared/components/table/table.component';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    imports: [TableComponent]
})
export class HistoryComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}