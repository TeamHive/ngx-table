import { ColumnDefinitions } from './column-definitions.type';
import { TableColumnConfiguration } from './table-column-configuration.interface';

export interface TableConfiguration<DataT, ColumnConfigT extends TableColumnConfiguration = TableColumnConfiguration, ColumnOptionT = DataT> {
    /**
     * An id for the table to keep scopes seperate when tracking states
     */
    tableId: string;

    /**
     * List of columns to display, in the order they should be displayed
     */
    columns: Array<keyof ColumnOptionT>;

    /**
     * definitions of the columns by column key
     */
    definitions?: ColumnDefinitions<ColumnOptionT, ColumnConfigT>;

    /**
     * An optional handler for when a user clicks on a row
     */
    onRowClick?: (item: DataT) => void;

    /**
     * If suppllied, this function will be called for every row to determine if the row should be disabled
     */
    isRowDisabled?: (item:DataT) => boolean;
}
