import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DocsExampleModule } from '@ngx-docs/example';
import { NxModule } from '@nrwl/nx';
import { TeamHivePackageCoreModule } from '@teamhive/angular-package-core';
import { NgxTableModule } from '@teamhive/ngx-table';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { AppPages, AppRoutes } from './app.routes';
import { AppPipes } from './pipes';
import { AppTables } from './tables';

@NgModule({
  declarations: [
    AppComponent,
    ...AppPages,
    ...AppTables,
    ...AppPipes
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(AppRoutes, { initialNavigation: 'enabled' }),
    NgxTableModule,
    DocsExampleModule.forRoot(),
    FlexLayoutModule,
    TeamHivePackageCoreModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
