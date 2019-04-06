import { Component } from '@angular/core';

@Component({
  selector: 'app-configured-table-page',
  templateUrl: 'configured-table-page.component.html',
  styleUrls: ['configured-table-page.component.scss']
})
export class ConfiguredTablePageComponent {

  readonly source = {
    html: require(`!!raw-loader?lang=html!../../tables/configured-table/configured-table.component.html`),
    ts: require(`!!raw-loader?lang=typescript!../../tables/configured-table/configured-table.component.ts`),
    css: require(`!!raw-loader?lang=css!../../tables/configured-table/configured-table.component.scss`)
  }

  otherFiles: { name: string; language: string; content: string }[] = [
    {
      name: 'table-data.interface.ts',
      language: 'javascript',
      content: require('!!raw-loader?lang=typescript!../../models/table-data.interface.ts')
    },
    {
      name: 'sample-data.ts',
      language: 'javascript',
      content: require('!!raw-loader?lang=typescript!../../data/sample-data.ts')
    },
    {
      name: 'table-configuration.interface.ts',
      language: 'javascript',
      content: require('!!raw-loader?lang=typescript!../../../../../../libs/ngx-table/src/lib/models/table-configuration.interface.ts')
    },
    {
      name: 'column-definitions.type.ts',
      language: 'javascript',
      content: require('!!raw-loader?lang=typescript!../../../../../../libs/ngx-table/src/lib/models/column-definitions.type.ts')
    },
    {
      name: 'table-column-configuration.interface.ts',
      language: 'javascript',
      content: require('!!raw-loader?lang=typescript!../../../../../../libs/ngx-table/src/lib/models/table-column-configuration.interface.ts')
    }
  ];
}
