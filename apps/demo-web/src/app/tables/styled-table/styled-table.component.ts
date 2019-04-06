import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { TableConfiguration } from '@teamhive/ngx-table';
import { SampleTableData } from '../../data/sample-data';
import { TableData } from '../../models/table-data.interface';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    const readmeText: string = require('!!raw-loader?lang=markdown!../../../../../../libs/ngx-table/README.md');

    this.cssVars = parseMarkdownTable(getStringBetweenCommentTags(readmeText, 'css-vars'));
  }

  ngAfterViewInit() {
    this.tableElement = (this.elementRef.nativeElement as HTMLElement).querySelector('ngx-table') as HTMLElement;
  }

  onVarChanged(property: string, element: HTMLInputElement) {
    this.tableElement.style.setProperty(property, element.value);
  }

  onVarRowClicked(element: HTMLInputElement) {
    (element.closest('.css-var-row').querySelector('input') as HTMLInputElement).focus();
  }
}

export function getStringBetweenCommentTags(docText: string, commentKey: string): string {
  const startTag = commentTag('start');
  const endTag = commentTag('end');

  return docText.substring(docText.indexOf(startTag) + startTag.length, docText.indexOf(endTag));

  function commentTag(bound: 'start' | 'end'): string {
    return `<!-- ${commentKey}:${bound} -->`
  }
}

export function parseMarkdownTable(mdTable: string) {
  mdTable = mdTable.trim();

  const lines = mdTable.split('\n');
  const result: string[][] = [];

  for (let i = 2; i < lines.length; i++) {
    result.push(
      lines[i].trim().split('|')
        .filter(x => !!x)
        .map(x => {
          return x.trim().replace(/['`"]/g, '');
        }));
  }

  return result;
}
