import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reactor-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reactor-list.component.html',
  styles: ``
})
export class ReactorListComponent {

  reactors: string[] = [
    'Czarnobyl',
    'Fukushima',
    'TMI',
    'Zaporizhzhia'
  ];
}
