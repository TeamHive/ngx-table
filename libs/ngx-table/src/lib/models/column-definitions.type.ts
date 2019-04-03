import { TableColumnConfiguration } from './table-column-configuration.interface';

export type ColumnDefinitions<OptionT = any, ColumnConfigT extends TableColumnConfiguration = any> = { [key in keyof OptionT]?: ColumnConfigT };
