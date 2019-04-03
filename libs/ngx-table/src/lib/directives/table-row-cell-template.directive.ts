import { Directive, Input, OnInit, TemplateRef } from '@angular/core';
import { NgxTableComponent } from '../components';
import { TableCellTemplateService } from '../services';

@Directive({
    selector: '[ngxColumn]'
})
export class NgxTableRowCellTemplateDirective implements OnInit {
   @Input() ngxColumn: string;

   constructor(
       protected host: TemplateRef<any>,
       protected service: TableCellTemplateService,
       protected ngxTable: NgxTableComponent<any, any>
    ) { }

   ngOnInit() {
       this.service.register('row-cell', this.ngxTable.configuration.tableId ,this.ngxColumn, this.host);
   }
}
