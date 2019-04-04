import * as tslib_1 from "tslib";
import { Directive, Input, TemplateRef } from '@angular/core';
import { NgxTableComponent } from '../components';
import { TableCellTemplateService } from '../services';
var NgxTableHeaderCellTemplateDirective = /** @class */ (function () {
    function NgxTableHeaderCellTemplateDirective(host, service, ngxTable) {
        this.host = host;
        this.service = service;
        this.ngxTable = ngxTable;
    }
    NgxTableHeaderCellTemplateDirective.prototype.ngOnInit = function () {
        this.service.register('header-cell', this.ngxTable.configuration.tableId, this.ngxHeader, this.host);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], NgxTableHeaderCellTemplateDirective.prototype, "ngxHeader", void 0);
    NgxTableHeaderCellTemplateDirective = tslib_1.__decorate([
        Directive({
            selector: '[ngxHeader]'
        }),
        tslib_1.__metadata("design:paramtypes", [TemplateRef,
            TableCellTemplateService,
            NgxTableComponent])
    ], NgxTableHeaderCellTemplateDirective);
    return NgxTableHeaderCellTemplateDirective;
}());
export { NgxTableHeaderCellTemplateDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGVhZGVyLWNlbGwtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHRlYW1oaXZlL25neC10YWJsZS8iLCJzb3VyY2VzIjpbInNyYy9saWIvZGlyZWN0aXZlcy90YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBS3ZEO0lBR0csNkNBQ2MsSUFBc0IsRUFDdEIsT0FBaUMsRUFDakMsUUFBcUM7UUFGckMsU0FBSSxHQUFKLElBQUksQ0FBa0I7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7UUFDakMsYUFBUSxHQUFSLFFBQVEsQ0FBNkI7SUFDOUMsQ0FBQztJQUVOLHNEQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFWUTtRQUFSLEtBQUssRUFBRTs7MEVBQW1CO0lBRGpCLG1DQUFtQztRQUgvQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtTQUMxQixDQUFDO2lEQUtxQixXQUFXO1lBQ1Isd0JBQXdCO1lBQ3ZCLGlCQUFpQjtPQU4vQixtQ0FBbUMsQ0FZL0M7SUFBRCwwQ0FBQztDQUFBLEFBWkQsSUFZQztTQVpZLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uSW5pdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neFRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBUYWJsZUNlbGxUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25neEhlYWRlcl0nXG59KVxuZXhwb3J0IGNsYXNzIE5neFRhYmxlSGVhZGVyQ2VsbFRlbXBsYXRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgIEBJbnB1dCgpIG5neEhlYWRlcjogc3RyaW5nO1xuXG4gICBjb25zdHJ1Y3RvcihcbiAgICAgICBwcm90ZWN0ZWQgaG9zdDogVGVtcGxhdGVSZWY8YW55PixcbiAgICAgICBwcm90ZWN0ZWQgc2VydmljZTogVGFibGVDZWxsVGVtcGxhdGVTZXJ2aWNlLFxuICAgICAgIHByb3RlY3RlZCBuZ3hUYWJsZTogTmd4VGFibGVDb21wb25lbnQ8YW55LCBhbnk+XG4gICAgKSB7IH1cblxuICAgbmdPbkluaXQoKSB7XG4gICAgICAgdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyKCdoZWFkZXItY2VsbCcsIHRoaXMubmd4VGFibGUuY29uZmlndXJhdGlvbi50YWJsZUlkLCB0aGlzLm5neEhlYWRlciwgdGhpcy5ob3N0KTtcbiAgIH1cbn1cbiJdfQ==