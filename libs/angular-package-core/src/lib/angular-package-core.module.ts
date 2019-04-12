import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { DocsExampleModule } from '@ngx-docs/example';
import { PrismModule } from '@ngx-prism/core';
import { ExamplePageShellComponent, SourceTabsComponent } from './components';
import { SafeHtmlPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    DocsExampleModule.forRoot(),
  ],
  entryComponents: [
    SourceTabsComponent
  ],
  exports: [
    SourceTabsComponent,
    ExamplePageShellComponent,
    CommonModule,
    SafeHtmlPipe
  ],
  declarations: [
    SourceTabsComponent,
    ExamplePageShellComponent,
    SafeHtmlPipe
  ]
})
export class TeamHivePackageCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TeamHivePackageCoreModule,
      providers: []
    };
  }
}
