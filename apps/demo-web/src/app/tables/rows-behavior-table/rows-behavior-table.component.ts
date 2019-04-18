import { Component, ViewEncapsulation } from '@angular/core';
import { TableConfiguration } from '@teamhive/ngx-table';
import { SampleTableData } from '../../data/sample-data';
import { TableData } from '../../models/table-data.interface';

@Component({
  selector: 'app-rows-behavior-table',
  templateUrl: 'rows-behavior-table.component.html',
  styleUrls: ['rows-behavior-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RowsBehaviorTableComponent {

  readonly data: TableData[] = SampleTableData.data;

  readonly configuration: TableConfiguration<TableData> = {
    tableId: 'rowsBehaviorTable',
    columns: ['name', 'bio', 'age', 'active'],
    definitions: {
      bio: {
        columnSize: 3
      }
    },
    onRowClick: (item: TableData) => this.selected = item,
    isRowDisabled: (item: TableData) => item.active === false
  };

  selected: TableData;
}
