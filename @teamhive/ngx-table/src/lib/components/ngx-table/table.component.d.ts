import { TemplateRef } from '@angular/core';
import { HeaderCellContext, RowCellContext, TableColumnConfiguration, TableConfiguration } from '../../models';
import { TableCellTemplateService } from '../../services';
export declare class NgxTableComponent<DataT, ColumnConfigT extends TableColumnConfiguration> {
    protected tableCellTemplateService: TableCellTemplateService;
    cellTemplates: TemplateRef<any>[];
    configuration: TableConfiguration<DataT, ColumnConfigT>;
    autosize: boolean;
    items: DataT[];
    private readonly widthUnits;
    constructor(tableCellTemplateService: TableCellTemplateService);
    getColumnSize(columnName: keyof DataT): {
        [key: string]: string | number;
    };
    onRowClick(item: DataT): void;
    getColumnDefinition(columnName: keyof DataT): ColumnConfigT | undefined;
    hasHeaders(): boolean;
    getTemplateForHeaderCell(cellId: keyof DataT): TemplateRef<any>;
    getTemplateForRowCell(cellId: keyof DataT): TemplateRef<any>;
    getHeaderCellContext(columnId: keyof DataT): HeaderCellContext;
    getRowCellContext(columnId: keyof DataT, item: DataT): RowCellContext;
}
