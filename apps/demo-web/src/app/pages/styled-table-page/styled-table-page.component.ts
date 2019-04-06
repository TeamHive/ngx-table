import { Component } from '@angular/core';

@Component({
  selector: 'app-styled-table-page',
  templateUrl: 'styled-table-page.component.html',
  styleUrls: ['styled-table-page.component.scss']
})
export class StyledTablePageComponent {

  readonly source = {
    html: require(`!!raw-loader?lang=html!../../tables/styled-table/styled-table.component.html`),
    ts: require(`!!raw-loader?lang=typescript!../../tables/styled-table/styled-table.component.ts`),
    css: require(`!!raw-loader?lang=css!../../tables/styled-table/styled-table.component.scss`)
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
