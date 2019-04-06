import { Component } from '@angular/core';
import { TableConfiguration } from '@teamhive/ngx-table';
import { SampleTableData } from '../../data/sample-data';
import { TableData } from '../../models/table-data.interface';

@Component({
  selector: 'app-customized-table',
  templateUrl: 'customized-table.component.html',
  styleUrls: ['customized-table.component.scss']
})
export class CustomizedTableComponent {

  readonly configuration: TableConfiguration<TableData> = {
    tableId: 'customizedTable',
    columns: ['name', 'bio', 'age', 'active'],
    definitions: {
      bio: {
        columnSize: 3
      }
    }
  };

  readonly data: TableData[] = SampleTableData.data;
}
