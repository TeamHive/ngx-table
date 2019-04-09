import { Directive, Input, OnInit, TemplateRef } from '@angular/core';
import { NgxTableComponent } from '../components';
import { TableCellTemplateService } from '../services';

@Directive({
    selector: '[header]'
})
export class NgxTableHeaderCellTemplateDirective implements OnInit {
   @Input() header: string;

   constructor(
       protected host: TemplateRef<any>,
       protected service: TableCellTemplateService,
       protected ngxTable: NgxTableComponent<any, any>
    ) { }

   ngOnInit() {
       this.service.register('header-cell', this.ngxTable.configuration.tableId, this.header, this.host);
   }
}
