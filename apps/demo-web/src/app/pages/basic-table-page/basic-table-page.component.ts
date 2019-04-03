import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-table-page',
  templateUrl: 'basic-table-page.component.html',
  styleUrls: ['basic-table-page.component.scss']
})
export class BasicTablePageComponent {

  readonly source = {
    html: require(`!!raw-loader?lang=html!../../tables/basic-table/basic-table.component.html`),
    ts: require(`!!raw-loader?lang=typescript!../../tables/basic-table/basic-table.component.ts`)
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
