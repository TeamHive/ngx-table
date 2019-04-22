import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxTableComponents } from './components/index';
import { NgxTableDirectives } from './directives/index';
import { NgxTableServices } from './services/index';

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
