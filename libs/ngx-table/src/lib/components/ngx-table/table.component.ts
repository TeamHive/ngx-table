import { Component, ContentChildren, Input, TemplateRef } from '@angular/core';
import { HeaderCellContext, RowCellContext, TableColumnConfiguration, TableConfiguration } from '../../models/index';
import { TableCellTemplateService } from '../../services/index';

@Component({
    selector: 'hive-ngx-table',
    styleUrls: ['table.component.scss'],
    templateUrl: 'table.component.html'
})
export class NgxTableComponent<DataT, ColumnConfigT extends TableColumnConfiguration> {
    @ContentChildren(TemplateRef) cellTemplates: TemplateRef<any>[];

    @Input() configuration: TableConfiguration<DataT, ColumnConfigT>;
    @Input() autosize = false;

    @Input() items: DataT[] = [];

    private readonly widthUnits: RegExp = /em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|px|pt|pc|%/gm;

    constructor(protected tableCellTemplateService: TableCellTemplateService) { }

    getColumnSize(columnName: keyof DataT): {[key: string]: string | number} {
        if (this.autosize) {
            return { flex: '1 0 0' };
        }

        const definition = this.getColumnDefinition(columnName);

        if (definition) {
            if (definition.columnSize) {

                const columnSize: string = definition.columnSize+'';

                if (this.widthUnits.test(columnSize) === true) {
                    return { flex: `0 0 ${columnSize}` };
                }
                else {
                    return { flex: `${columnSize} 0 0` };
                }
            }
        }

        return { flex: '1 0 0' };
    }

    onRowClick(item: DataT) {
      if (this.configuration.onRowClick && this.isRowDisabled(item) !== true) {
        this.configuration.onRowClick(item);
      }
    }

    isRowDisabled(item: DataT): boolean {
        if (this.configuration.isRowDisabled) {
            return this.configuration.isRowDisabled(item)
        }
    }

    getColumnDefinition(columnName: keyof DataT): ColumnConfigT | undefined {
        if (this.configuration.definitions) {
            return this.configuration.definitions[columnName];
        }

        return undefined;
    }

    hasHeaders() {
        return this.tableCellTemplateService.hasHeaders(this.configuration.tableId);
    }

    getTemplateForHeaderCell(cellId: keyof DataT): TemplateRef<any> {
        return this.tableCellTemplateService.getHeaderCellTemplateRef(this.configuration.tableId, cellId as string);
    }

    getTemplateForRowCell(cellId: keyof DataT): TemplateRef<any> {
        return this.tableCellTemplateService.getRowCellTemplateRef(this.configuration.tableId, cellId as string);
    }

    getHeaderCellContext(columnId: keyof DataT): HeaderCellContext {
        return {
            definition: this.getColumnDefinition(columnId),
            columnId: columnId,
            tableId: this.configuration.tableId
        };
    }

    getRowCellContext(columnId: keyof DataT, item: DataT): RowCellContext {
        return {
            data: item,
            columnId: columnId,
            tableId: this.configuration.tableId
        };
    }
}
