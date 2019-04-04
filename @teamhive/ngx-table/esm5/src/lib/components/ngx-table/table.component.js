import * as tslib_1 from "tslib";
import { Component, ContentChildren, Input, TemplateRef } from '@angular/core';
import { TableCellTemplateService } from '../../services';
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
    return NgxTableComponent;
}());
export { NgxTableComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlYW1oaXZlL25neC10YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9saWIvY29tcG9uZW50cy9uZ3gtdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzFEO0lBVUksMkJBQXNCLHdCQUFrRDtRQUFsRCw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBTi9ELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQUVaLGVBQVUsR0FBVyxvREFBb0QsQ0FBQztJQUVmLENBQUM7SUFFN0UseUNBQWEsR0FBYixVQUFjLFVBQXVCO1FBQ2pDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7U0FDNUI7UUFFRCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEQsSUFBSSxVQUFVLEVBQUU7WUFDWixJQUFJLFVBQVUsQ0FBQyxVQUFVLEVBQUU7Z0JBRXZCLElBQU0sVUFBVSxHQUFXLFVBQVUsQ0FBQyxVQUFVLEdBQUMsRUFBRSxDQUFDO2dCQUVwRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksRUFBRTtvQkFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFPLFVBQVksRUFBRSxDQUFDO2lCQUN4QztxQkFDSTtvQkFDRCxPQUFPLEVBQUUsSUFBSSxFQUFLLFVBQVUsU0FBTSxFQUFFLENBQUM7aUJBQ3hDO2FBQ0o7U0FDSjtRQUVELE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELHNDQUFVLEdBQVYsVUFBVyxJQUFXO1FBQ3BCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7WUFDakMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQsK0NBQW1CLEdBQW5CLFVBQW9CLFVBQXVCO1FBQ3ZDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNyRDtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0ksT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELG9EQUF3QixHQUF4QixVQUF5QixNQUFtQjtRQUN4QyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFnQixDQUFDLENBQUM7SUFDaEgsQ0FBQztJQUVELGlEQUFxQixHQUFyQixVQUFzQixNQUFtQjtRQUNyQyxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFnQixDQUFDLENBQUM7SUFDN0csQ0FBQztJQUVELGdEQUFvQixHQUFwQixVQUFxQixRQUFxQjtRQUN0QyxPQUFPO1lBQ0gsVUFBVSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUM7WUFDOUMsUUFBUSxFQUFFLFFBQVE7WUFDbEIsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTztTQUN0QyxDQUFDO0lBQ04sQ0FBQztJQUVELDZDQUFpQixHQUFqQixVQUFrQixRQUFxQixFQUFFLElBQVc7UUFDaEQsT0FBTztZQUNILElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLFFBQVE7WUFDbEIsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTztTQUN0QyxDQUFDO0lBQ04sQ0FBQztJQTNFNkI7UUFBN0IsZUFBZSxDQUFDLFdBQVcsQ0FBQzs7NERBQW1DO0lBRXZEO1FBQVIsS0FBSyxFQUFFOzs0REFBeUQ7SUFDeEQ7UUFBUixLQUFLLEVBQUU7O3VEQUFrQjtJQUVqQjtRQUFSLEtBQUssRUFBRTs7b0RBQXFCO0lBTnBCLGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUVyQiw2eENBQW1DOztTQUN0QyxDQUFDO2lEQVdrRCx3QkFBd0I7T0FWL0QsaUJBQWlCLENBNkU3QjtJQUFELHdCQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0E3RVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVhZGVyQ2VsbENvbnRleHQsIFJvd0NlbGxDb250ZXh0LCBUYWJsZUNvbHVtbkNvbmZpZ3VyYXRpb24sIFRhYmxlQ29uZmlndXJhdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscyc7XG5pbXBvcnQgeyBUYWJsZUNlbGxUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LXRhYmxlJyxcbiAgICBzdHlsZVVybHM6IFsndGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgICB0ZW1wbGF0ZVVybDogJ3RhYmxlLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hUYWJsZUNvbXBvbmVudDxEYXRhVCwgQ29sdW1uQ29uZmlnVCBleHRlbmRzIFRhYmxlQ29sdW1uQ29uZmlndXJhdGlvbj4ge1xuICAgIEBDb250ZW50Q2hpbGRyZW4oVGVtcGxhdGVSZWYpIGNlbGxUZW1wbGF0ZXM6IFRlbXBsYXRlUmVmPGFueT5bXTtcblxuICAgIEBJbnB1dCgpIGNvbmZpZ3VyYXRpb246IFRhYmxlQ29uZmlndXJhdGlvbjxEYXRhVCwgQ29sdW1uQ29uZmlnVD47XG4gICAgQElucHV0KCkgYXV0b3NpemUgPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGl0ZW1zOiBEYXRhVFtdID0gW107XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHdpZHRoVW5pdHM6IFJlZ0V4cCA9IC9lbXxleHxjaHxyZW18dnd8dmh8dm1pbnx2bWF4fGNtfG1tfGlufHB4fHB0fHBjfCUvZ207XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGFibGVDZWxsVGVtcGxhdGVTZXJ2aWNlOiBUYWJsZUNlbGxUZW1wbGF0ZVNlcnZpY2UpIHsgfVxuXG4gICAgZ2V0Q29sdW1uU2l6ZShjb2x1bW5OYW1lOiBrZXlvZiBEYXRhVCk6IHtba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXJ9IHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b3NpemUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGZsZXg6ICcxIDAgMCcgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRlZmluaXRpb24gPSB0aGlzLmdldENvbHVtbkRlZmluaXRpb24oY29sdW1uTmFtZSk7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGlmIChkZWZpbml0aW9uLmNvbHVtblNpemUpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtblNpemU6IHN0cmluZyA9IGRlZmluaXRpb24uY29sdW1uU2l6ZSsnJztcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLndpZHRoVW5pdHMudGVzdChjb2x1bW5TaXplKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBmbGV4OiBgMCAwICR7Y29sdW1uU2l6ZX1gIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBmbGV4OiBgJHtjb2x1bW5TaXplfSAwIDBgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgZmxleDogJzEgMCAwJyB9O1xuICAgIH1cblxuICAgIG9uUm93Q2xpY2soaXRlbTogRGF0YVQpIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24ub25Sb3dDbGljaykge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ub25Sb3dDbGljayhpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRDb2x1bW5EZWZpbml0aW9uKGNvbHVtbk5hbWU6IGtleW9mIERhdGFUKTogQ29sdW1uQ29uZmlnVCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uZGVmaW5pdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbmZpZ3VyYXRpb24uZGVmaW5pdGlvbnNbY29sdW1uTmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGhhc0hlYWRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlQ2VsbFRlbXBsYXRlU2VydmljZS5oYXNIZWFkZXJzKHRoaXMuY29uZmlndXJhdGlvbi50YWJsZUlkKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZUZvckhlYWRlckNlbGwoY2VsbElkOiBrZXlvZiBEYXRhVCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50YWJsZUNlbGxUZW1wbGF0ZVNlcnZpY2UuZ2V0SGVhZGVyQ2VsbFRlbXBsYXRlUmVmKHRoaXMuY29uZmlndXJhdGlvbi50YWJsZUlkLCBjZWxsSWQgYXMgc3RyaW5nKTtcbiAgICB9XG5cbiAgICBnZXRUZW1wbGF0ZUZvclJvd0NlbGwoY2VsbElkOiBrZXlvZiBEYXRhVCk6IFRlbXBsYXRlUmVmPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy50YWJsZUNlbGxUZW1wbGF0ZVNlcnZpY2UuZ2V0Um93Q2VsbFRlbXBsYXRlUmVmKHRoaXMuY29uZmlndXJhdGlvbi50YWJsZUlkLCBjZWxsSWQgYXMgc3RyaW5nKTtcbiAgICB9XG5cbiAgICBnZXRIZWFkZXJDZWxsQ29udGV4dChjb2x1bW5JZDoga2V5b2YgRGF0YVQpOiBIZWFkZXJDZWxsQ29udGV4dCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWZpbml0aW9uOiB0aGlzLmdldENvbHVtbkRlZmluaXRpb24oY29sdW1uSWQpLFxuICAgICAgICAgICAgY29sdW1uSWQ6IGNvbHVtbklkLFxuICAgICAgICAgICAgdGFibGVJZDogdGhpcy5jb25maWd1cmF0aW9uLnRhYmxlSWRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRSb3dDZWxsQ29udGV4dChjb2x1bW5JZDoga2V5b2YgRGF0YVQsIGl0ZW06IERhdGFUKTogUm93Q2VsbENvbnRleHQge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogaXRlbSxcbiAgICAgICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgICAgIHRhYmxlSWQ6IHRoaXMuY29uZmlndXJhdGlvbi50YWJsZUlkXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19