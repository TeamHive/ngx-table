import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePageComponent {
  readme: string;

  constructor() {
    const readmeText: string = require('!!raw-loader?lang=markdown!../../../../../../libs/ngx-table/README.md');

    this.readme = readmeText.substr(readmeText.indexOf('<!-- header-chop -->')).replace(/```typescript/g, '```javascript');
  }
}
