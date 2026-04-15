import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styles: []
})
export class AppComponent {
  reactors: string[] = [
    'Czarnobyl',
    'Fukushima',
    'TMI',
    'Zaporizhzhia'
  ];
}
