import * as tslib_1 from "tslib";
import { Directive, Input, TemplateRef } from '@angular/core';
import { NgxTableComponent } from '../components';
import { TableCellTemplateService } from '../services';
var NgxTableRowCellTemplateDirective = /** @class */ (function () {
    function NgxTableRowCellTemplateDirective(host, service, ngxTable) {
        this.host = host;
        this.service = service;
        this.ngxTable = ngxTable;
    }
    NgxTableRowCellTemplateDirective.prototype.ngOnInit = function () {
        this.service.register('row-cell', this.ngxTable.configuration.tableId, this.ngxColumn, this.host);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NgxTableRowCellTemplateDirective.prototype, "ngxColumn", void 0);
    NgxTableRowCellTemplateDirective = tslib_1.__decorate([
        Directive({
            selector: '[ngxColumn]'
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef,
            TableCellTemplateService,
            NgxTableComponent])
    ], NgxTableRowCellTemplateDirective);
    return NgxTableRowCellTemplateDirective;
}());
export { NgxTableRowCellTemplateDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LWNlbGwtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlYW1oaXZlL25neC10YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9saWIvZGlyZWN0aXZlcy90YWJsZS1yb3ctY2VsbC10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBS3ZEO0lBR0csMENBQ2MsSUFBc0IsRUFDdEIsT0FBaUMsRUFDakMsUUFBcUM7UUFGckMsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7UUFDakMsYUFBUSxHQUFSLFFBQVEsQ0FBNkI7SUFDOUMsQ0FBQztJQUVOLG1EQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFWUTtRQUFSLEtBQUssRUFBRTs7dUVBQW1CO0lBRGpCLGdDQUFnQztRQUg1QyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtTQUMxQixDQUFDO2lEQUtxQixXQUFXO1lBQ1Isd0JBQXdCO1lBQ3ZCLGlCQUFpQjtPQU4vQixnQ0FBZ0MsQ0FZNUM7SUFBRCx1Q0FBQztDQUFBLEFBWkQsSUFZQztTQVpZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBUYWJsZUNlbGxUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neENvbHVtbl0nXG59KVxuZXhwb3J0IGNsYXNzIE5neFRhYmxlUm93Q2VsbFRlbXBsYXRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgIEBJbnB1dCgpIG5neENvbHVtbjogc3RyaW5nO1xuXG4gICBjb25zdHJ1Y3RvcihcbiAgICAgICBwcm90ZWN0ZWQgaG9zdDogVGVtcGxhdGVSZWY8YW55PixcbiAgICAgICBwcm90ZWN0ZWQgc2VydmljZTogVGFibGVDZWxsVGVtcGxhdGVTZXJ2aWNlLFxuICAgICAgIHByb3RlY3RlZCBuZ3hUYWJsZTogTmd4VGFibGVDb21wb25lbnQ8YW55LCBhbnk+XG4gICAgKSB7IH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICAgdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyKCdyb3ctY2VsbCcsIHRoaXMubmd4VGFibGUuY29uZmlndXJhdGlvbi50YWJsZUlkICx0aGlzLm5neENvbHVtbiwgdGhpcy5ob3N0KTtcbiAgIH1cbn1cbiJdfQ==