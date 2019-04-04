import { TableColumnConfiguration } from './table-column-configuration.interface';
export declare type ColumnDefinitions<OptionT = any, ColumnConfigT extends TableColumnConfiguration = any> = {
    [key in keyof OptionT]?: ColumnConfigT;
};
