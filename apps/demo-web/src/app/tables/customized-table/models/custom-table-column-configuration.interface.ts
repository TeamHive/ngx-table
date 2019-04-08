import { TableColumnConfiguration } from '@teamhive/ngx-table';

export interface CustomTableColumnConfiguration extends TableColumnConfiguration {
  headerLabel: string;

  matIconName: string;
}
