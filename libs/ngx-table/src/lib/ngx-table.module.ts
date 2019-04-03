import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTableComponents } from './components';
import { NgxTableDirectives } from './directives';
import { NgxTableServices } from './services';

@NgModule({
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
export class NgxTableModule {}
