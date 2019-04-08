import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { DocsExampleModule } from '@ngx-docs/example';
import { NxModule } from '@nrwl/nx';
import { NgxTableModule } from '@teamhive/ngx-table';
import { SourceTabsModule } from '@teamhive/source-tabs';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { AppPages, AppRoutes } from './app.routes';
import { AppComponents } from './components';
import { AppPipes } from './pipes';
import { AppTables } from './tables';

@NgModule({
  declarations: [
    AppComponent,
    ...AppPages,
    ...AppComponents,
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
    SourceTabsModule.forRoot(),
    BrowserAnimationsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
