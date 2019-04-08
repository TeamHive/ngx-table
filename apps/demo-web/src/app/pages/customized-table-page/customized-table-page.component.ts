import { Component } from '@angular/core';

@Component({
  selector: 'app-customized-table-page',
  templateUrl: 'customized-table-page.component.html',
  styleUrls: ['customized-table-page.component.scss']
})
export class CustomizedTablePageComponent {

  readonly source = {
    html: require(`!!raw-loader?lang=html!../../tables/customized-table/customized-table.component.html`),
    css: require(`!!raw-loader?lang=css!../../tables/customized-table/customized-table.component.scss`),
    ts: require(`!!raw-loader?lang=typescript!../../tables/customized-table/customized-table.component.ts`)
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
      name: 'custom-table-column-configuration.interface',
      language: 'javascript',
      content: require('!!raw-loader?lang=typescript!../../tables/customized-table/models/custom-table-column-configuration.interface')
    },
    {
      name: 'table-column-configuration.interface.ts',
      language: 'javascript',
      content: require('!!raw-loader?lang=typescript!../../../../../../libs/ngx-table/src/lib/models/table-column-configuration.interface.ts')
    }
  ];
}
