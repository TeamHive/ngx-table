import { Component } from '@angular/core';
import { TableConfiguration } from '@teamhive/ngx-table';
import { SampleTableData } from '../../data/sample-data';
import { TableData } from '../../models/table-data.interface';
import { CustomTableColumnConfiguration } from './models/custom-table-column-configuration.interface';

@Component({
  selector: 'app-customized-table',
  templateUrl: 'customized-table.component.html',
  styleUrls: ['customized-table.component.scss']
})
export class CustomizedTableComponent {

  readonly configuration: TableConfiguration<TableData, CustomTableColumnConfiguration> = {
    tableId: 'customizedTable',
    columns: ['name', 'bio', 'location', 'active'],
    definitions: {
      active: {
        headerLabel: 'Active',
        matIconName: 'check_circle'
      },
      bio: {
        columnSize: 3,
        headerLabel: 'About',
        matIconName: 'info'
      },
      name: {
        headerLabel: 'Name',
        matIconName: 'person'
      },
      location: {
        headerLabel: 'Country',
        matIconName: 'person_pin_circle'
      }
    }
  };

  readonly data: TableData[] = SampleTableData.data;
}
