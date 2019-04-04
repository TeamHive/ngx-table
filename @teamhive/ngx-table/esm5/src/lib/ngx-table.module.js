import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTableComponents } from './components';
import { NgxTableDirectives } from './directives';
import { NgxTableServices } from './services';
var NgxTableModule = /** @class */ (function () {
    function NgxTableModule() {
    }
    NgxTableModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            declarations: tslib_1.__spread(NgxTableComponents, NgxTableDirectives),
            providers: tslib_1.__spread(NgxTableServices),
            exports: tslib_1.__spread(NgxTableComponents, NgxTableDirectives)
        })
    ], NgxTableModule);
    return NgxTableModule;
}());
export { NgxTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWFtaGl2ZS9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJzcmMvbGliL25neC10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBa0I5QztJQUFBO0lBQTZCLENBQUM7SUFBakIsY0FBYztRQWhCMUIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7YUFDYjtZQUNELFlBQVksbUJBQ1Asa0JBQWtCLEVBQ2xCLGtCQUFrQixDQUN0QjtZQUNELFNBQVMsbUJBQ0osZ0JBQWdCLENBQ3BCO1lBQ0QsT0FBTyxtQkFDRixrQkFBa0IsRUFDbEIsa0JBQWtCLENBQ3RCO1NBQ0YsQ0FBQztPQUNXLGNBQWMsQ0FBRztJQUFELHFCQUFDO0NBQUEsQUFBOUIsSUFBOEI7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmd4VGFibGVDb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7IE5neFRhYmxlRGlyZWN0aXZlcyB9IGZyb20gJy4vZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBOZ3hUYWJsZVNlcnZpY2VzIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgLi4uTmd4VGFibGVDb21wb25lbnRzLFxuICAgIC4uLk5neFRhYmxlRGlyZWN0aXZlc1xuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICAuLi5OZ3hUYWJsZVNlcnZpY2VzXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICAuLi5OZ3hUYWJsZUNvbXBvbmVudHMsXG4gICAgLi4uTmd4VGFibGVEaXJlY3RpdmVzXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4VGFibGVNb2R1bGUge31cbiJdfQ==