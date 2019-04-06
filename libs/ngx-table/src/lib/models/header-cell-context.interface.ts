import { TableColumnConfiguration } from './table-column-configuration.interface';

/**
 * The structure provided by using the [ngxHeader] directive
 * DataT is the data type for the data in the rows. Gives you property intellesence
 * ColumnConfigT is the data type for the definition provided to the "config" input of the TableComponent. Gives you intellesence
 */
export interface HeaderCellContext<DataT = any, ColumnConfigT extends TableColumnConfiguration = any> {
    definition: ColumnConfigT;
    columnId: string | keyof DataT;
    tableId: string;
}
