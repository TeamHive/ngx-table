import { Component } from '@angular/core';

@Component({
  selector: 'app-customized-table-page',
  templateUrl: 'customized-table-page.component.html',
  styleUrls: ['customized-table-page.component.scss']
})
export class CustomizedTablePageComponent {

  readonly source = {
    html: require(`!!raw-loader?lang=html!../../tables/customized-table/customized-table.component.html`),
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
    }
  ];
}
