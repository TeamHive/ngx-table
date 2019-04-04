import { OnInit, TemplateRef } from '@angular/core';
import { NgxTableComponent } from '../components';
import { TableCellTemplateService } from '../services';
export declare class NgxTableRowCellTemplateDirective implements OnInit {
    protected host: TemplateRef<any>;
    protected service: TableCellTemplateService;
    protected ngxTable: NgxTableComponent<any, any>;
    ngxColumn: string;
    constructor(host: TemplateRef<any>, service: TableCellTemplateService, ngxTable: NgxTableComponent<any, any>);
    ngOnInit(): void;
}
