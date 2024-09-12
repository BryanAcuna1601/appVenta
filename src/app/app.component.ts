import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cine', url: '/cine', icon: 'videocam' },
    { title: 'Eventos', url: '/eventos', icon: 'cash' },
    { title: 'Deportes', url: '/deportes', icon: 'football' },
    { title: 'Conciertos', url: '/conciertos', icon: 'radio' },
  ];

  constructor() {}
}
