import { Component, Input } from '@angular/core';
import { SupportingSource, ExampleSources } from '../../models';

@Component({
  selector: 'app-example-page-shell',
  templateUrl: 'example-page-shell.component.html',
  styleUrls: ['example-page-shell.component.scss']
})
export class ExamplePageShellComponent {

  @Input() exampleTitle = 'Example';
  @Input() exampleSources: ExampleSources = {};
  @Input() otherSources: SupportingSource[] = [];

  constructor() { }


}
