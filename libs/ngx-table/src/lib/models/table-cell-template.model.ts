import { TemplateRef } from '@angular/core';

export class TableCellTemplate {
    constructor(
        public scope: TableCellTemplateScope,
        public tableId: string,
        public id: string,
        public ref: TemplateRef<any>
    ) { }
}

export type TableCellTemplateScope = 'header-cell' | 'row-cell';
