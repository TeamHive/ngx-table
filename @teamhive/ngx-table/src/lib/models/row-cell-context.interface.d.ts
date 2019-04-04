/**
 * The structure provided by using the [column] directive
 * DataT is the data type for the data in the rows. Gives you property intellesence
 */
export interface RowCellContext<DataT = any> {
    data: DataT;
    columnId: keyof DataT;
    tableId: string;
}
