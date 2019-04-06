import { Component } from '@angular/core';
import { TableColumnConfiguration, TableConfiguration } from '@teamhive/ngx-table';
import { SampleTableData } from '../../data/sample-data';
import { TableData } from '../../models/table-data.interface';

@Component({
  selector: 'app-configured-table',
  templateUrl: 'configured-table.component.html',
  styleUrls: ['configured-table.component.scss']
})
export class ConfiguredTableComponent {

  readonly dataOptions: (keyof TableData)[] = ['name', 'bio', 'age', 'location', 'active'];
  readonly columnOptions: (keyof TableColumnConfiguration)[] = ['columnSize'];

  readonly configuration: TableConfiguration<TableData> = {
    tableId: 'configuredTable',
    columns: ['name', 'bio', 'age', 'active'],
    definitions: {
      bio: {
        columnSize: 3
      },
      age: {
        columnSize: '40px'
      }
    }
  };

  readonly data: TableData[] = SampleTableData.data;

  // Handlers
  onColumnCheckboxChanged(columnKey: keyof TableData) {
    const index = this.configuration.columns.indexOf(columnKey);

    if (index === -1) {
      this.configuration.columns.push(columnKey);
    }
    else {
      this.configuration.columns.splice(index, 1);
    }

    this.configuration.columns.sort((a, b) => this.dataOptions.indexOf(a) - this.dataOptions.indexOf(b))
  }

  onColumnSizeChanged(columnKey: keyof TableData, value: string) {
    if (this.configuration.definitions[columnKey] == null) {
      this.configuration.definitions[columnKey] = {};
    }

    this.configuration.definitions[columnKey].columnSize = value;
  }

  // UI Helpers
  isChecked(columnKey: keyof TableData): boolean {
    return this.configuration.columns.includes(columnKey);
  }
}
