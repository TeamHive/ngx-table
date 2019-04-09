import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { TableConfiguration } from '@teamhive/ngx-table';
import { SampleTableData } from '../../data/sample-data';
import { TableData } from '../../models/table-data.interface';
import { ParseUtils } from '../../utils/parse.utils';

@Component({
  selector: 'app-styled-table',
  templateUrl: 'styled-table.component.html',
  styleUrls: ['styled-table.component.scss']
})
export class StyledTableComponent implements AfterViewInit {

  readonly configuration: TableConfiguration<TableData> = {
    tableId: 'styledTable',
    columns: ['name', 'bio', 'age', 'active'],
    definitions: {
      bio: {
        columnSize: 3
      }
    }
  };

  readonly data: TableData[] = SampleTableData.data;

  cssVars: string[][] = [];

  protected tableElement: HTMLElement;

  constructor(protected elementRef: ElementRef) {
    const readmeText: string = require('!!raw-loader?lang=markdown!../../../../../../README.md');

    this.cssVars = ParseUtils.parseMarkdownTable(ParseUtils.getStringBetweenCommentTags(readmeText, 'css-vars'));
  }

  ngAfterViewInit() {
    this.tableElement = (this.elementRef.nativeElement as HTMLElement).querySelector('hive-ngx-table') as HTMLElement;
  }

  onVarChanged(property: string, element: HTMLInputElement) {
    this.tableElement.style.setProperty(property, element.value);
  }

  onVarRowClicked(element: HTMLInputElement) {
    (element.closest('.css-var-row').querySelector('input') as HTMLInputElement).focus();
  }
}
