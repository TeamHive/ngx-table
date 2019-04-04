(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@teamhive/ngx-table', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.teamhive = global.teamhive || {}, global.teamhive['ngx-table'] = {}), global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    var TableCellTemplate = /** @class */ (function () {
        function TableCellTemplate(scope, tableId, id, ref) {
            this.scope = scope;
            this.tableId = tableId;
            this.id = id;
            this.ref = ref;
        }
        return TableCellTemplate;
    }());

    var TableCellTemplateService = /** @class */ (function () {
        function TableCellTemplateService() {
            this.templates = new Array();
        }
        TableCellTemplateService.prototype.register = function (scope, tableId, columnId, templateRef) {
            this.templates.push(new TableCellTemplate(scope, tableId, columnId, templateRef));
        };
        TableCellTemplateService.prototype.hasHeaders = function (tableId) {
            return this.templates.some(function (t) { return t.scope === 'header-cell' && t.tableId === tableId; });
        };
        TableCellTemplateService.prototype.getRowCellTemplateRef = function (tableId, columnId) {
            var template = this.templates.find(function (t) { return t.id === columnId && t.scope === 'row-cell' && t.tableId === tableId; });
            return template ? template.ref : null;
        };
        TableCellTemplateService.prototype.getHeaderCellTemplateRef = function (tableId, columnId) {
            var template = this.templates.find(function (t) { return t.id === columnId && t.scope === 'header-cell' && t.tableId === tableId; });
            return template ? template.ref : null;
        };
        TableCellTemplateService = __decorate([
            core.Injectable(),
            __metadata("design:paramtypes", [])
        ], TableCellTemplateService);
        return TableCellTemplateService;
    }());

    var NgxTableServices = [
        TableCellTemplateService
    ];

    var NgxTableComponent = /** @class */ (function () {
        function NgxTableComponent(tableCellTemplateService) {
            this.tableCellTemplateService = tableCellTemplateService;
            this.autosize = false;
            this.items = [];
            this.widthUnits = /em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|px|pt|pc|%/gm;
        }
        NgxTableComponent.prototype.getColumnSize = function (columnName) {
            if (this.autosize) {
                return { flex: '1 0 0' };
            }
            var definition = this.getColumnDefinition(columnName);
            if (definition) {
                if (definition.columnSize) {
                    var columnSize = definition.columnSize + '';
                    if (this.widthUnits.test(columnSize) === true) {
                        return { flex: "0 0 " + columnSize };
                    }
                    else {
                        return { flex: columnSize + " 0 0" };
                    }
                }
            }
            return { flex: '1 0 0' };
        };
        NgxTableComponent.prototype.onRowClick = function (item) {
            if (this.configuration.onRowClick) {
                this.configuration.onRowClick(item);
            }
        };
        NgxTableComponent.prototype.getColumnDefinition = function (columnName) {
            if (this.configuration.definitions) {
                return this.configuration.definitions[columnName];
            }
            return undefined;
        };
        NgxTableComponent.prototype.hasHeaders = function () {
            return this.tableCellTemplateService.hasHeaders(this.configuration.tableId);
        };
        NgxTableComponent.prototype.getTemplateForHeaderCell = function (cellId) {
            return this.tableCellTemplateService.getHeaderCellTemplateRef(this.configuration.tableId, cellId);
        };
        NgxTableComponent.prototype.getTemplateForRowCell = function (cellId) {
            return this.tableCellTemplateService.getRowCellTemplateRef(this.configuration.tableId, cellId);
        };
        NgxTableComponent.prototype.getHeaderCellContext = function (columnId) {
            return {
                definition: this.getColumnDefinition(columnId),
                columnId: columnId,
                tableId: this.configuration.tableId
            };
        };
        NgxTableComponent.prototype.getRowCellContext = function (columnId, item) {
            return {
                data: item,
                columnId: columnId,
                tableId: this.configuration.tableId
            };
        };
        __decorate([
            core.ContentChildren(core.TemplateRef),
            __metadata("design:type", Array)
        ], NgxTableComponent.prototype, "cellTemplates", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NgxTableComponent.prototype, "configuration", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], NgxTableComponent.prototype, "autosize", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Array)
        ], NgxTableComponent.prototype, "items", void 0);
        NgxTableComponent = __decorate([
            core.Component({
                selector: 'ngx-table',
                template: "<div class=\"ngx-table\" [ngClass]=\"configuration.tableId\">\n    <div class=\"ngx-table-header\" *ngIf=\"hasHeaders()\">\n        <div *ngFor=\"let columnId of configuration.columns; let i=index\"\n            [class]=\"'ngx-table-cell ngx-table-column-' + columnId\" [ngStyle]=\"getColumnSize(columnId)\">\n\n            <ng-template\n                [ngTemplateOutlet]=\"getTemplateForHeaderCell(columnId)\"\n                [ngTemplateOutletContext]=\"{ $implicit: getHeaderCellContext(columnId) }\"></ng-template>\n        </div>\n    </div>\n    <div class=\"ngx-table-data\">\n        <div *ngFor=\"let item of items; let even=even; let odd=odd\" (click)=\"onRowClick(item)\"\n            class=\"ngx-table-row\" [class.ngx-table-row-odd]=\"odd\" [class.ngx-table-row-even]=\"even\">\n\n            <div *ngFor=\"let columnId of configuration.columns; let i=index\"\n                [class]=\"'ngx-table-cell ngx-table-row-cell ngx-table-column-' + columnId\" [ngStyle]=\"getColumnSize(columnId)\">\n                    <ng-template\n                        [ngTemplateOutlet]=\"getTemplateForRowCell(columnId)\"\n                        [ngTemplateOutletContext]=\"{ $implicit: getRowCellContext(columnId, item) }\"></ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n",
                styles: [":host{--ngx-table-border-width:1px;--ngx-table-border-color:#cccccc;--ngx-table-border-style:solid;--ngx-table-border-radius:0;--ngx-table-background-color:white;--ngx-table-header-background-color:var(--ngx-table-background-color);--ngx-table-odd-row-background-color:var(--ngx-table-background-color);--ngx-table-even-row-background-color:var(--ngx-table-background-color);--ngx-table-row-height:auto;--ngx-table-cell-align-items:center;--ngx-table-cell-justify-content:center;--ngx-table-cell-padding:0;--ngx-table-header-pointer-events:initial;--ngx-table-content-pointer-events:initial;border-radius:var(--ngx-table-border-radius)}.ngx-table{display:flex;flex-direction:column;border:var(--ngx-table-border-width) var(--ngx-table-border-style) var(--ngx-table-border-color);border-radius:var(--ngx-table-border-radius);min-width:100%;max-width:100%;width:0}.ngx-table-header{display:flex;border-bottom:var(--ngx-table-border-width) var(--ngx-table-border-style) var(--ngx-table-border-color);border-top-right-radius:var(--ngx-table-border-radius);border-top-left-radius:var(--ngx-table-border-radius);background-color:var(--ngx-table-header-background-color);pointer-events:var(--ngx-table-header-pointer-events)}.ngx-table-data{display:flex;flex-direction:column;pointer-events:var(--ngx-table-content-pointer-events)}.ngx-table-row{display:flex;height:var(--ngx-table-row-height)}.ngx-table-row~.ngx-table-row{border-top:var(--ngx-table-border-width) var(--ngx-table-border-style) var(--ngx-table-border-color)}.ngx-table-row:last-child{border-bottom-right-radius:var(--ngx-table-border-radius);border-bottom-left-radius:var(--ngx-table-border-radius)}.ngx-table-row:last-child::before{border-bottom-left-radius:var(--ngx-table-border-radius)}.ngx-table-row:last-child::after{border-bottom-right-radius:var(--ngx-table-border-radius)}.ngx-table-row-even{background-color:var(--ngx-table-even-row-background-color)}.ngx-table-row-odd{background-color:var(--ngx-table-odd-row-background-color)}.ngx-table-cell{display:flex;flex-basis:0;align-items:var(--ngx-table-cell-align-items);justify-content:var(--ngx-table-cell-justify-content);padding:var(--ngx-table-cell-padding);min-width:0}.ngx-table-cell~.ngx-table-cell{border-left:var(--ngx-table-border-width) var(--ngx-table-border-style) var(--ngx-table-border-color)}"]
            }),
            __metadata("design:paramtypes", [TableCellTemplateService])
        ], NgxTableComponent);
        return NgxTableComponent;
    }());

    var NgxTableComponents = [
        NgxTableComponent
    ];

    var NgxTableHeaderCellTemplateDirective = /** @class */ (function () {
        function NgxTableHeaderCellTemplateDirective(host, service, ngxTable) {
            this.host = host;
            this.service = service;
            this.ngxTable = ngxTable;
        }
        NgxTableHeaderCellTemplateDirective.prototype.ngOnInit = function () {
            this.service.register('header-cell', this.ngxTable.configuration.tableId, this.ngxHeader, this.host);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], NgxTableHeaderCellTemplateDirective.prototype, "ngxHeader", void 0);
        NgxTableHeaderCellTemplateDirective = __decorate([
            core.Directive({
                selector: '[ngxHeader]'
            }),
            __metadata("design:paramtypes", [core.TemplateRef,
                TableCellTemplateService,
                NgxTableComponent])
        ], NgxTableHeaderCellTemplateDirective);
        return NgxTableHeaderCellTemplateDirective;
    }());

    var NgxTableRowCellTemplateDirective = /** @class */ (function () {
        function NgxTableRowCellTemplateDirective(host, service, ngxTable) {
            this.host = host;
            this.service = service;
            this.ngxTable = ngxTable;
        }
        NgxTableRowCellTemplateDirective.prototype.ngOnInit = function () {
            this.service.register('row-cell', this.ngxTable.configuration.tableId, this.ngxColumn, this.host);
        };
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], NgxTableRowCellTemplateDirective.prototype, "ngxColumn", void 0);
        NgxTableRowCellTemplateDirective = __decorate([
            core.Directive({
                selector: '[ngxColumn]'
            }),
            __metadata("design:paramtypes", [core.TemplateRef,
                TableCellTemplateService,
                NgxTableComponent])
        ], NgxTableRowCellTemplateDirective);
        return NgxTableRowCellTemplateDirective;
    }());

    var NgxTableDirectives = [
        NgxTableRowCellTemplateDirective,
        NgxTableHeaderCellTemplateDirective
    ];

    var NgxTableModule = /** @class */ (function () {
        function NgxTableModule() {
        }
        NgxTableModule = __decorate([
            core.NgModule({
                imports: [
                    common.CommonModule
                ],
                declarations: __spread(NgxTableComponents, NgxTableDirectives),
                providers: __spread(NgxTableServices),
                exports: __spread(NgxTableComponents, NgxTableDirectives)
            })
        ], NgxTableModule);
        return NgxTableModule;
    }());

    exports.NgxTableComponent = NgxTableComponent;
    exports.NgxTableComponents = NgxTableComponents;
    exports.NgxTableDirectives = NgxTableDirectives;
    exports.NgxTableHeaderCellTemplateDirective = NgxTableHeaderCellTemplateDirective;
    exports.NgxTableModule = NgxTableModule;
    exports.NgxTableRowCellTemplateDirective = NgxTableRowCellTemplateDirective;
    exports.NgxTableServices = NgxTableServices;
    exports.TableCellTemplate = TableCellTemplate;
    exports.TableCellTemplateService = TableCellTemplateService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=teamhive-ngx-table.umd.js.map
