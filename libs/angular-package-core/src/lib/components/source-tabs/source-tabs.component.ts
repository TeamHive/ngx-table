import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SupportingSource } from '../../models'

@Component({
  selector: 'source-tabs',
  templateUrl: './source-tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceTabsComponent {
  @Input()
  title: string;

  @Input()
  files: SupportingSource[];
}
