import { Component } from '@angular/core';

@Component({
  selector: 'app-rows-behavior-table-page',
  templateUrl: 'rows-behavior-table-page.component.html',
  styleUrls: ['rows-behavior-table-page.component.scss']
})
export class RowsBehaviorTablePageComponent {

  readonly source = {
    html: require(`!!raw-loader?lang=html!../../tables/rows-behavior-table/rows-behavior-table.component.html`),
    ts: require(`!!raw-loader?lang=typescript!../../tables/rows-behavior-table/rows-behavior-table.component.ts`)
  }

  otherFiles: { name: string; language: string; content: string }[] = [
    {
      name: 'row-behaviour.scss',
      language: 'css',
      content: require('!!raw-loader?lang=css!../../../css/_row-behaviour.scss')
    },
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
