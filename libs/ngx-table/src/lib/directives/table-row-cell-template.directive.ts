import { Directive, Input, OnInit, TemplateRef } from '@angular/core';
import { NgxTableComponent } from '../components/index';
import { TableCellTemplateService } from '../services/index';

@Directive({
    selector: '[column]'
})
export class NgxTableRowCellTemplateDirective implements OnInit {
   @Input() column: string;

   constructor(
       protected host: TemplateRef<any>,
       protected service: TableCellTemplateService,
       protected ngxTable: NgxTableComponent<any, any>
    ) { }

   ngOnInit() {
       this.service.register('row-cell', this.ngxTable.configuration.tableId ,this.column, this.host);
   }
}
