import { Component, Input, computed, signal } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: false,
  templateUrl: './second.component.html',
  styles: ``
})
export class SecondComponent {
  @Input() reactorName: string = '';

  temperatureSignal = signal(0);

  temperatureStatus = computed(() => {
    const temp = this.temperatureSignal();

    if (temp < 16) {
      return 'Rdzeń reaktora jest zimny';
    } else if (temp <= 90) {
      return 'Temperatura reaktora jest w normie';
    } else {
      return 'Reaktor jest w stanie krytycznym';
    }
  }) 

  increaseTemperature() {
    if(this.temperatureSignal() < 100)
    this.temperatureSignal.update(t => t + 10);
  }
}
