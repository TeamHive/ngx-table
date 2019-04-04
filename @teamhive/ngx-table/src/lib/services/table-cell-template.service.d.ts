import { TemplateRef } from '@angular/core';
import { TableCellTemplateScope } from '../models';
export declare class TableCellTemplateService {
    private templates;
    constructor();
    register(scope: TableCellTemplateScope, tableId: string, columnId: string, templateRef: TemplateRef<any>): void;
    hasHeaders(tableId: string): boolean;
    getRowCellTemplateRef(tableId: string, columnId: string): TemplateRef<any>;
    getHeaderCellTemplateRef(tableId: string, columnId: string): TemplateRef<any>;
}
