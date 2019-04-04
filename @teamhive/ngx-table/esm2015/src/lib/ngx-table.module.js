import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTableComponents } from './components';
import { NgxTableDirectives } from './directives';
import { NgxTableServices } from './services';
let NgxTableModule = class NgxTableModule {
};
NgxTableModule = tslib_1.__decorate([
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
export { NgxTableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0ZWFtaGl2ZS9uZ3gtdGFibGUvIiwic291cmNlcyI6WyJzcmMvbGliL25neC10YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBa0I5QyxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0NBQUcsQ0FBQTtBQUFqQixjQUFjO0lBaEIxQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUU7WUFDWixHQUFHLGtCQUFrQjtZQUNyQixHQUFHLGtCQUFrQjtTQUN0QjtRQUNELFNBQVMsRUFBRTtZQUNULEdBQUcsZ0JBQWdCO1NBQ3BCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsR0FBRyxrQkFBa0I7WUFDckIsR0FBRyxrQkFBa0I7U0FDdEI7S0FDRixDQUFDO0dBQ1csY0FBYyxDQUFHO1NBQWpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5neFRhYmxlQ29tcG9uZW50cyB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBOZ3hUYWJsZURpcmVjdGl2ZXMgfSBmcm9tICcuL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgTmd4VGFibGVTZXJ2aWNlcyB9IGZyb20gJy4vc2VydmljZXMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIC4uLk5neFRhYmxlQ29tcG9uZW50cyxcbiAgICAuLi5OZ3hUYWJsZURpcmVjdGl2ZXNcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLi4uTmd4VGFibGVTZXJ2aWNlc1xuICBdLFxuICBleHBvcnRzOiBbXG4gICAgLi4uTmd4VGFibGVDb21wb25lbnRzLFxuICAgIC4uLk5neFRhYmxlRGlyZWN0aXZlc1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFRhYmxlTW9kdWxlIHt9XG4iXX0=