import { BasicTableComponent } from './basic-table/basic-table.component';
import { ConfiguredTableComponent } from './configured-table/configured-table.component';
import { CustomizedTableComponent } from './customized-table/customized-table.component';
import { RowsBehaviorTableComponent } from './rows-behavior-table/rows-behavior-table.component';
import { StyledTableComponent } from './styled-table/styled-table.component';

export const AppTables = [
  BasicTableComponent,
  StyledTableComponent,
  ConfiguredTableComponent,
  CustomizedTableComponent,
  RowsBehaviorTableComponent
];

export * from './basic-table/basic-table.component';
export * from './configured-table/configured-table.component';
export * from './customized-table/customized-table.component';
export * from './rows-behavior-table/rows-behavior-table.component';
export * from './styled-table/styled-table.component';

