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
    tableId: 'basicTable',
    columns: ['name', 'bio', 'age', 'active'],
    definitions: {
      bio: {
        columnSize: 3
      }
    }
  };

  readonly data: TableData[] = SampleTableData.data;
}
