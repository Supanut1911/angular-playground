import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ActionBarComponent,
    MaxMinMeterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  value = 0;
  appMinLabel = 'myAppMinLabel';
  appMaxLabel = 'myAppMaxLabel';
  handleCalculateBuffet(priceBuffetInput: string) {
    this.value = (+priceBuffetInput * 3) / 4;
  }

  testNumberChange(value: number) {
    console.log('test number change from app action bar', value);
  }

  doAppMinChange(value: number) {
    console.log('test minchange event', value);
  }

  doAppMaxChange(value: number) {
    console.log('test maxchange event', value);
  }
}
