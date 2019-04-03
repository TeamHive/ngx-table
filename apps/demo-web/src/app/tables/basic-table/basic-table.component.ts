import { Component } from '@angular/core';
import { TableConfiguration } from '@teamhive/ngx-table';
import { SampleTableData } from '../../data/sample-data';
import { TableData } from '../../models/table-data.interface';

@Component({
  selector: 'app-basic-table',
  templateUrl: 'basic-table.component.html',
  styleUrls: ['basic-table.component.scss']
})
export class BasicTableComponent {

  readonly configuration: TableConfiguration<TableData> = {
    columns: ['name', 'bio', 'age', 'active'],
    definitions: {
      active: {
        columnSize: 1
      },
      age: {
        columnSize: 1
      },
      bio: {
        columnSize: 4
      },
      name: {
        columnSize: 2
      }
    },
    tableId: 'basicTable'
  };

  readonly data: TableData[] = SampleTableData.data;

  constructor() { }
}
