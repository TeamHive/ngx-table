import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-table';

  navItems: any[] = [{
    title: 'Basic',
    location: '/basic'
  },{
    title: 'Styled',
    location: '/styled'
  },{
    title: 'Configured',
    location: '/configured'
  }]
}
