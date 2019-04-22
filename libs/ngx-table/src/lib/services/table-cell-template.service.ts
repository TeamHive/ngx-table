import { Injectable, TemplateRef } from '@angular/core';
import { TableCellTemplate, TableCellTemplateScope } from '../models/index';

@Injectable()
export class TableCellTemplateService {
    private templates: Array<TableCellTemplate>;

    constructor() {
        this.templates = new Array();
    }

    register(scope: TableCellTemplateScope, tableId: string, columnId: string, templateRef: TemplateRef<any>) {
        this.templates.push(new TableCellTemplate(scope, tableId, columnId, templateRef));
    }

    hasHeaders(tableId: string): boolean {
        return this.templates.some((t) => t.scope === 'header-cell' && t.tableId === tableId);
    }

    getRowCellTemplateRef(tableId: string, columnId: string): TemplateRef<any> {
        const template = this.templates.find((t) => t.id === columnId && t.scope === 'row-cell' && t.tableId === tableId);

        return template ? template.ref : null;
    }

    getHeaderCellTemplateRef(tableId: string, columnId: string): TemplateRef<any> {
        const template = this.templates.find((t) => t.id === columnId && t.scope === 'header-cell' && t.tableId === tableId);

        return template ? template.ref : null;
    }
}
