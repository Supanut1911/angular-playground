import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { SquareFlexComponent } from './square-flex/square-flex.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ActionBarComponent,
    // MaxMinMeterComponent,
    SquareFlexComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  value = 0;
  appMinLabel = 'myAppMinLabel';
  appMaxLabel = 'myAppMaxLabel';
  squareHeigh = 100;
  squarewidth = 250;

  activate = false;

  appCounter = 20;

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

  set100Width() {
    this.squarewidth = 100;
  }
  set300Width() {
    this.squarewidth = 300;
  }
  set500Width() {
    this.squarewidth = 500;
  }
  set100Hight() {
    this.squareHeigh = 100;
  }
  set300Hight() {
    this.squareHeigh = 300;
  }
  set500Hight() {
    this.squareHeigh = 500;
  }
}
