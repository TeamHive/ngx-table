import * as tslib_1 from "tslib";
import { Component, ContentChildren, Input, TemplateRef } from '@angular/core';
import { TableCellTemplateService } from '../../services';
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
tslib_1.__decorate([
    ContentChildren(TemplateRef),
    tslib_1.__metadata("design:type", Array)
], NgxTableComponent.prototype, "cellTemplates", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NgxTableComponent.prototype, "configuration", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], NgxTableComponent.prototype, "autosize", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Array)
], NgxTableComponent.prototype, "items", void 0);
NgxTableComponent = tslib_1.__decorate([
    Component({
        selector: 'ngx-table',
        template: "<div class=\"ngx-table\" [ngClass]=\"configuration.tableId\">\n    <div class=\"ngx-table-header\" *ngIf=\"hasHeaders()\">\n        <div *ngFor=\"let columnId of configuration.columns; let i=index\"\n            [class]=\"'ngx-table-cell ngx-table-column-' + columnId\" [ngStyle]=\"getColumnSize(columnId)\">\n\n            <ng-template\n                [ngTemplateOutlet]=\"getTemplateForHeaderCell(columnId)\"\n                [ngTemplateOutletContext]=\"{ $implicit: getHeaderCellContext(columnId) }\"></ng-template>\n        </div>\n    </div>\n    <div class=\"ngx-table-data\">\n        <div *ngFor=\"let item of items; let even=even; let odd=odd\" (click)=\"onRowClick(item)\"\n            class=\"ngx-table-row\" [class.ngx-table-row-odd]=\"odd\" [class.ngx-table-row-even]=\"even\">\n\n            <div *ngFor=\"let columnId of configuration.columns; let i=index\"\n                [class]=\"'ngx-table-cell ngx-table-row-cell ngx-table-column-' + columnId\" [ngStyle]=\"getColumnSize(columnId)\">\n                    <ng-template\n                        [ngTemplateOutlet]=\"getTemplateForRowCell(columnId)\"\n                        [ngTemplateOutletContext]=\"{ $implicit: getRowCellContext(columnId, item) }\"></ng-template>\n            </div>\n        </div>\n    </div>\n</div>\n",
        styles: [":host{--ngx-table-border-width:1px;--ngx-table-border-color:#cccccc;--ngx-table-border-style:solid;--ngx-table-border-radius:0;--ngx-table-background-color:white;--ngx-table-header-background-color:var(--ngx-table-background-color);--ngx-table-odd-row-background-color:var(--ngx-table-background-color);--ngx-table-even-row-background-color:var(--ngx-table-background-color);--ngx-table-row-height:auto;--ngx-table-cell-align-items:center;--ngx-table-cell-justify-content:center;--ngx-table-cell-padding:0;--ngx-table-header-pointer-events:initial;--ngx-table-content-pointer-events:initial;border-radius:var(--ngx-table-border-radius)}.ngx-table{display:flex;flex-direction:column;border:var(--ngx-table-border-width) var(--ngx-table-border-style) var(--ngx-table-border-color);border-radius:var(--ngx-table-border-radius);min-width:100%;max-width:100%;width:0}.ngx-table-header{display:flex;border-bottom:var(--ngx-table-border-width) var(--ngx-table-border-style) var(--ngx-table-border-color);border-top-right-radius:var(--ngx-table-border-radius);border-top-left-radius:var(--ngx-table-border-radius);background-color:var(--ngx-table-header-background-color);pointer-events:var(--ngx-table-header-pointer-events)}.ngx-table-data{display:flex;flex-direction:column;pointer-events:var(--ngx-table-content-pointer-events)}.ngx-table-row{display:flex;height:var(--ngx-table-row-height)}.ngx-table-row~.ngx-table-row{border-top:var(--ngx-table-border-width) var(--ngx-table-border-style) var(--ngx-table-border-color)}.ngx-table-row:last-child{border-bottom-right-radius:var(--ngx-table-border-radius);border-bottom-left-radius:var(--ngx-table-border-radius)}.ngx-table-row:last-child::before{border-bottom-left-radius:var(--ngx-table-border-radius)}.ngx-table-row:last-child::after{border-bottom-right-radius:var(--ngx-table-border-radius)}.ngx-table-row-even{background-color:var(--ngx-table-even-row-background-color)}.ngx-table-row-odd{background-color:var(--ngx-table-odd-row-background-color)}.ngx-table-cell{display:flex;flex-basis:0;align-items:var(--ngx-table-cell-align-items);justify-content:var(--ngx-table-cell-justify-content);padding:var(--ngx-table-cell-padding);min-width:0}.ngx-table-cell~.ngx-table-cell{border-left:var(--ngx-table-border-width) var(--ngx-table-border-style) var(--ngx-table-border-color)}"]
    }),
    tslib_1.__metadata("design:paramtypes", [TableCellTemplateService])
], NgxTableComponent);
export { NgxTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlYW1oaXZlL25neC10YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9saWIvY29tcG9uZW50cy9uZ3gtdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzFELElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBVTFCLFlBQXNCLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBTi9ELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQUVaLGVBQVUsR0FBVyxvREFBb0QsQ0FBQztJQUVmLENBQUM7SUFFN0UsYUFBYSxDQUFDLFVBQXVCO1FBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7U0FDNUI7UUFFRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEQsSUFBSSxVQUFVLEVBQUU7WUFDWixJQUFJLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Z0JBRXZCLE1BQU0sVUFBVSxHQUFXLFVBQVUsQ0FBQyxVQUFVLEdBQUMsRUFBRSxDQUFDO2dCQUVwRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRTtvQkFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLFVBQVUsRUFBRSxFQUFFLENBQUM7aUJBQ3hDO3FCQUNJO29CQUNELE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxVQUFVLE1BQU0sRUFBRSxDQUFDO2lCQUN4QzthQUNKO1NBQ0o7UUFFRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBVztRQUNwQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELG1CQUFtQixDQUFDLFVBQXVCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNyRDtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxVQUFVO1FBQ04sT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELHdCQUF3QixDQUFDLE1BQW1CO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLE1BQWdCLENBQUMsQ0FBQztJQUNoSCxDQUFDO0lBRUQscUJBQXFCLENBQUMsTUFBbUI7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBZ0IsQ0FBQyxDQUFDO0lBQzdHLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxRQUFxQjtRQUN0QyxPQUFPO1lBQ0gsVUFBVSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7WUFDOUMsUUFBUSxFQUFFLFFBQVE7WUFDbEIsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTztTQUN0QyxDQUFDO0lBQ04sQ0FBQztJQUVELGlCQUFpQixDQUFDLFFBQXFCLEVBQUUsSUFBVztRQUNoRCxPQUFPO1lBQ0gsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPO1NBQ3RDLENBQUM7SUFDTixDQUFDO0NBQ0osQ0FBQTtBQTVFaUM7SUFBN0IsZUFBZSxDQUFDLFdBQVcsQ0FBQzs7d0RBQW1DO0FBRXZEO0lBQVIsS0FBSyxFQUFFOzt3REFBeUQ7QUFDeEQ7SUFBUixLQUFLLEVBQUU7O21EQUFrQjtBQUVqQjtJQUFSLEtBQUssRUFBRTs7Z0RBQXFCO0FBTnBCLGlCQUFpQjtJQUw3QixTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUVyQiw2eENBQW1DOztLQUN0QyxDQUFDOzZDQVdrRCx3QkFBd0I7R0FWL0QsaUJBQWlCLENBNkU3QjtTQTdFWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWFkZXJDZWxsQ29udGV4dCwgUm93Q2VsbENvbnRleHQsIFRhYmxlQ29sdW1uQ29uZmlndXJhdGlvbiwgVGFibGVDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcbmltcG9ydCB7IFRhYmxlQ2VsbFRlbXBsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtdGFibGUnLFxuICAgIHN0eWxlVXJsczogWyd0YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICAgIHRlbXBsYXRlVXJsOiAndGFibGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE5neFRhYmxlQ29tcG9uZW50PERhdGFULCBDb2x1bW5Db25maWdUIGV4dGVuZHMgVGFibGVDb2x1bW5Db25maWd1cmF0aW9uPiB7XG4gICAgQENvbnRlbnRDaGlsZHJlbihUZW1wbGF0ZVJlZikgY2VsbFRlbXBsYXRlczogVGVtcGxhdGVSZWY8YW55PltdO1xuXG4gICAgQElucHV0KCkgY29uZmlndXJhdGlvbjogVGFibGVDb25maWd1cmF0aW9uPERhdGFULCBDb2x1bW5Db25maWdUPjtcbiAgICBASW5wdXQoKSBhdXRvc2l6ZSA9IGZhbHNlO1xuXG4gICAgQElucHV0KCkgaXRlbXM6IERhdGFUW10gPSBbXTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgd2lkdGhVbml0czogUmVnRXhwID0gL2VtfGV4fGNofHJlbXx2d3x2aHx2bWlufHZtYXh8Y218bW18aW58cHh8cHR8cGN8JS9nbTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0YWJsZUNlbGxUZW1wbGF0ZVNlcnZpY2U6IFRhYmxlQ2VsbFRlbXBsYXRlU2VydmljZSkgeyB9XG5cbiAgICBnZXRDb2x1bW5TaXplKGNvbHVtbk5hbWU6IGtleW9mIERhdGFUKToge1trZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcn0ge1xuICAgICAgICBpZiAodGhpcy5hdXRvc2l6ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZmxleDogJzEgMCAwJyB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0Q29sdW1uRGVmaW5pdGlvbihjb2x1bW5OYW1lKTtcblxuICAgICAgICBpZiAoZGVmaW5pdGlvbikge1xuICAgICAgICAgICAgaWYgKGRlZmluaXRpb24uY29sdW1uU2l6ZSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uU2l6ZTogc3RyaW5nID0gZGVmaW5pdGlvbi5jb2x1bW5TaXplKycnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud2lkdGhVbml0cy50ZXN0KGNvbHVtblNpemUpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGZsZXg6IGAwIDAgJHtjb2x1bW5TaXplfWAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGZsZXg6IGAke2NvbHVtblNpemV9IDAgMGAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBmbGV4OiAnMSAwIDAnIH07XG4gICAgfVxuXG4gICAgb25Sb3dDbGljayhpdGVtOiBEYXRhVCkge1xuICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5vblJvd0NsaWNrKSB7XG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5vblJvd0NsaWNrKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldENvbHVtbkRlZmluaXRpb24oY29sdW1uTmFtZToga2V5b2YgRGF0YVQpOiBDb2x1bW5Db25maWdUIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi5kZWZpbml0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbi5kZWZpbml0aW9uc1tjb2x1bW5OYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaGFzSGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVDZWxsVGVtcGxhdGVTZXJ2aWNlLmhhc0hlYWRlcnModGhpcy5jb25maWd1cmF0aW9uLnRhYmxlSWQpO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlRm9ySGVhZGVyQ2VsbChjZWxsSWQ6IGtleW9mIERhdGFUKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlQ2VsbFRlbXBsYXRlU2VydmljZS5nZXRIZWFkZXJDZWxsVGVtcGxhdGVSZWYodGhpcy5jb25maWd1cmF0aW9uLnRhYmxlSWQsIGNlbGxJZCBhcyBzdHJpbmcpO1xuICAgIH1cblxuICAgIGdldFRlbXBsYXRlRm9yUm93Q2VsbChjZWxsSWQ6IGtleW9mIERhdGFUKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlQ2VsbFRlbXBsYXRlU2VydmljZS5nZXRSb3dDZWxsVGVtcGxhdGVSZWYodGhpcy5jb25maWd1cmF0aW9uLnRhYmxlSWQsIGNlbGxJZCBhcyBzdHJpbmcpO1xuICAgIH1cblxuICAgIGdldEhlYWRlckNlbGxDb250ZXh0KGNvbHVtbklkOiBrZXlvZiBEYXRhVCk6IEhlYWRlckNlbGxDb250ZXh0IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlZmluaXRpb246IHRoaXMuZ2V0Q29sdW1uRGVmaW5pdGlvbihjb2x1bW5JZCksXG4gICAgICAgICAgICBjb2x1bW5JZDogY29sdW1uSWQsXG4gICAgICAgICAgICB0YWJsZUlkOiB0aGlzLmNvbmZpZ3VyYXRpb24udGFibGVJZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldFJvd0NlbGxDb250ZXh0KGNvbHVtbklkOiBrZXlvZiBEYXRhVCwgaXRlbTogRGF0YVQpOiBSb3dDZWxsQ29udGV4dCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRhOiBpdGVtLFxuICAgICAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICAgICAgdGFibGVJZDogdGhpcy5jb25maWd1cmF0aW9uLnRhYmxlSWRcbiAgICAgICAgfTtcbiAgICB9XG59XG4iXX0=