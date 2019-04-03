import { NgModule, ModuleWithProviders } from '@angular/core';
import { SourceTabsComponent } from './source-tabs.component';
import { PrismModule } from '@ngx-prism/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  entryComponents: [
    SourceTabsComponent
  ],
  exports: [
    SourceTabsComponent,
    CommonModule,
    SafeHtmlPipe
  ],
  declarations: [
    SourceTabsComponent,
    SafeHtmlPipe
  ]
})
export class SourceTabsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SourceTabsModule,
      providers: []
    };
  }
}
