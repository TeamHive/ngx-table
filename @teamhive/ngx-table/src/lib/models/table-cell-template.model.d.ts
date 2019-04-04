import { TemplateRef } from '@angular/core';
export declare class TableCellTemplate {
    scope: TableCellTemplateScope;
    tableId: string;
    id: string;
    ref: TemplateRef<any>;
    constructor(scope: TableCellTemplateScope, tableId: string, id: string, ref: TemplateRef<any>);
}
export declare type TableCellTemplateScope = 'header-cell' | 'row-cell';
