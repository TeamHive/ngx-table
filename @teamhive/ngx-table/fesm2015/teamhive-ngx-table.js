import { __decorate, __metadata } from 'tslib';
import { Injectable, ContentChildren, TemplateRef, Input, Component, Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class TableCellTemplate {
    constructor(scope, tableId, id, ref) {
        this.scope = scope;
        this.tableId = tableId;
        this.id = id;
        this.ref = ref;
    }
}

let TableCellTemplateService = class TableCellTemplateService {
    constructor() {
        this.templates = new Array();
    }
    register(scope, tableId, columnId, templateRef) {
        this.templates.push(new TableCellTemplate(scope, tableId, columnId, templateRef));
    }
    hasHeaders(tableId) {
        return this.templates.some((t) => t.scope === 'header-cell' && t.tableId === tableId);
    }
    getRowCellTemplateRef(tableId, columnId) {
        const template = this.templates.find((t) => t.id === columnId && t.scope === 'row-cell' && t.tableId === tableId);
        return template ? template.ref : null;
    }
    getHeaderCellTemplateRef(tableId, columnId) {
        const template = this.templates.find((t) => t.id === columnId && t.scope === 'header-cell' && t.tableId === tableId);
        return template ? template.ref : null;
    }
};
TableCellTemplateService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], TableCellTemplateService);

const NgxTableServices = [
    TableCellTemplateService
];

let NgxTableComponent = class NgxTableComponent {
    constructor(tableCellTemplateService) {
        this.tableCellTemplateService = tableCellTemplateService;
        this.autosize = false;
        this.items = [];
        this.widthUnits = /em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|px|pt|pc|%/gm;
    }
    getColumnSize(columnName) {
        if (this.autosize) {
            return { flex: '1 0 0' };
        }
        const definition = this.getColumnDefinition(columnName);
        if (definition) {
            if (definition.columnSize) {
                const columnSize = definition.columnSize + '';
                if (this.widthUnits.test(columnSize) === true) {
                    return { flex: `0 0 ${columnSize}` };
                }
                else {
                    return { flex: `${columnSize} 0 0` };
                }
            }
        }
        return { flex: '1 0 0' };
    }
    onRowClick(item) {
        if (this.configuration.onRowClick) {
            this.configuration.onRowClick(item);
        }
    }
    getColumnDefinition(columnName) {
        if (this.configuration.definitions) {
            return this.configuration.definitions[columnName];
        }
        return undefined;
    }
    hasHeaders() {
        return this.tableCellTemplateService.hasHeaders(this.configuration.tableId);
    }
    getTemplateForHeaderCell(cellId) {
        return this.tableCellTemplateService.getHeaderCellTemplateRef(this.configuration.tableId, cellId);
    }
    getTemplateForRowCell(cellId) {
        return this.tableCellTemplateService.getRowCellTemplateRef(this.configuration.tableId, cellId);
    }
    getHeaderCellContext(columnId) {
        return {
            definition: this.getColumnDefinition(columnId),
            columnId: columnId,
            tableId: this.configuration.tableId
        };
    }
    getRowCellContext(columnId, item) {
        return {
            data: item,
            columnId: columnId,
            tableId: this.configuration.tableId
        };
    }
};
__decorate([
    ContentChildren(TemplateRef),
    __metadata("design:type", Array)
], NgxTableComponent.prototype, "cellTemplates", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxTableComponent.prototype, "configuration", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], NgxTableComponent.prototype, "autosize", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], NgxTableComponent.prototype, "items", void 0);
NgxTableComponent = __decorate([
    Component({
        selector: 'ngx-table',
        template: "<div class=\"ngx-table\" [ngClass]=\"configuration.tableId\">\n    <div class=\"ngx-table-header\" *ngIf=\"hasHeaders()\">\n        <div *ngFor=\"let columnId of configuration.columns; let i=index\"\n            [class]=\"'ngx-table-cell ngx-table-column-' + columnId\" [ngStyle]=\"getColumnSize(columnId)\">\n\n            <ng-template\n                [ngTemplateOutlet]=\"getTemplateForHeaderCell(columnId)\"\n                [ngTemplateOutletContext]=\"{ $implicit: getHeaderCellContext(columnId) }\"></ng-template>\n        </div>\n    </div>\n    <div class=\"ngx-table-data\">\n        <div *ngFor=\"let item of items; let even=even; let odd=odd\" (click)=\"onRowClick(item)\"\n            class=\"ngx-table-row\" [class.ngx-table-row-odd]=\"odd\" [class.ngx-table-row-even]=\"even\">\n\n            <div *ngFor=\"let columnId of configuration.columns; let i=index\"\n                [class]=\"'ngx-table-cell ngx-table-row-cell ngx-table-column-' + columnId\" [ngStyle]=\"getColumnSize(columnId)\">\n                    <ng-template\n                        [ngTemplateOutlet]=\"getTemplateForRowCell(columnId)\"\n                        [ngTemplateOutletContext]=\"{ $implicit: getRowCellContext(columnId, item) }\"></ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n",
        styles: [":host{--ngx-table-border-width:1px;--ngx-table-border-color:#cccccc;--ngx-table-border-style:solid;--ngx-table-border-radius:0;--ngx-table-background-color:white;--ngx-table-header-background-color:var(--ngx-table-background-color);--ngx-table-odd-row-background-color:var(--ngx-table-background-color);--ngx-table-even-row-background-color:var(--ngx-table-background-color);--ngx-table-row-height:auto;--ngx-table-cell-align-items:center;--ngx-table-cell-justify-content:center;--ngx-table-cell-padding:0;--ngx-table-header-pointer-events:initial;--ngx-table-content-pointer-events:initial;border-radius:var(--ngx-table-border-radius)}.ngx-table{display:flex;flex-direction:column;border:var(--ngx-table-border-width) var(--ngx-table-border-style) var(--ngx-table-border-color);border-radius:var(--ngx-table-border-radius);min-width:100%;max-width:100%;width:0}.ngx-table-header{display:flex;border-bottom:var(--ngx-table-border-width) var(--ngx-table-border-style) var(--ngx-table-border-color);border-top-right-radius:var(--ngx-table-border-radius);border-top-left-radius:var(--ngx-table-border-radius);background-color:var(--ngx-table-header-background-color);pointer-events:var(--ngx-table-header-pointer-events)}.ngx-table-data{display:flex;flex-direction:column;pointer-events:var(--ngx-table-content-pointer-events)}.ngx-table-row{display:flex;height:var(--ngx-table-row-height)}.ngx-table-row~.ngx-table-row{border-top:var(--ngx-table-border-width) var(--ngx-table-border-style) var(--ngx-table-border-color)}.ngx-table-row:last-child{border-bottom-right-radius:var(--ngx-table-border-radius);border-bottom-left-radius:var(--ngx-table-border-radius)}.ngx-table-row:last-child::before{border-bottom-left-radius:var(--ngx-table-border-radius)}.ngx-table-row:last-child::after{border-bottom-right-radius:var(--ngx-table-border-radius)}.ngx-table-row-even{background-color:var(--ngx-table-even-row-background-color)}.ngx-table-row-odd{background-color:var(--ngx-table-odd-row-background-color)}.ngx-table-cell{display:flex;flex-basis:0;align-items:var(--ngx-table-cell-align-items);justify-content:var(--ngx-table-cell-justify-content);padding:var(--ngx-table-cell-padding);min-width:0}.ngx-table-cell~.ngx-table-cell{border-left:var(--ngx-table-border-width) var(--ngx-table-border-style) var(--ngx-table-border-color)}"]
    }),
    __metadata("design:paramtypes", [TableCellTemplateService])
], NgxTableComponent);

const NgxTableComponents = [
    NgxTableComponent
];

let NgxTableHeaderCellTemplateDirective = class NgxTableHeaderCellTemplateDirective {
    constructor(host, service, ngxTable) {
        this.host = host;
        this.service = service;
        this.ngxTable = ngxTable;
    }
    ngOnInit() {
        this.service.register('header-cell', this.ngxTable.configuration.tableId, this.ngxHeader, this.host);
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxTableHeaderCellTemplateDirective.prototype, "ngxHeader", void 0);
NgxTableHeaderCellTemplateDirective = __decorate([
    Directive({
        selector: '[ngxHeader]'
    }),
    __metadata("design:paramtypes", [TemplateRef,
        TableCellTemplateService,
        NgxTableComponent])
], NgxTableHeaderCellTemplateDirective);

let NgxTableRowCellTemplateDirective = class NgxTableRowCellTemplateDirective {
    constructor(host, service, ngxTable) {
        this.host = host;
        this.service = service;
        this.ngxTable = ngxTable;
    }
    ngOnInit() {
        this.service.register('row-cell', this.ngxTable.configuration.tableId, this.ngxColumn, this.host);
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], NgxTableRowCellTemplateDirective.prototype, "ngxColumn", void 0);
NgxTableRowCellTemplateDirective = __decorate([
    Directive({
        selector: '[ngxColumn]'
    }),
    __metadata("design:paramtypes", [TemplateRef,
        TableCellTemplateService,
        NgxTableComponent])
], NgxTableRowCellTemplateDirective);

const NgxTableDirectives = [
    NgxTableRowCellTemplateDirective,
    NgxTableHeaderCellTemplateDirective
];

let NgxTableModule = class NgxTableModule {
};
NgxTableModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            ...NgxTableComponents,
            ...NgxTableDirectives
        ],
        providers: [
            ...NgxTableServices
        ],
        exports: [
            ...NgxTableComponents,
            ...NgxTableDirectives
        ]
    })
], NgxTableModule);

/**
 * Generated bundle index. Do not edit.
 */

export { NgxTableComponent, NgxTableComponents, NgxTableDirectives, NgxTableHeaderCellTemplateDirective, NgxTableModule, NgxTableRowCellTemplateDirective, NgxTableServices, TableCellTemplate, TableCellTemplateService };
//# sourceMappingURL=teamhive-ngx-table.js.map
