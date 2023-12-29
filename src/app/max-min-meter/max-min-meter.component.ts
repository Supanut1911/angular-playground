import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionBarComponent } from '../action-bar/action-bar.component';

@Component({
  selector: 'app-max-min-meter',
  standalone: true,
  imports: [ActionBarComponent],
  templateUrl: './max-min-meter.component.html',
  styleUrl: './max-min-meter.component.css',
})
export class MaxMinMeterComponent {
  @Input() minLabel = 'minLabel';
  @Input() maxLabel = 'maxLabel';

  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();

  doMinChnage(value: number) {
    this.minChange.emit(value);
  }

  doMaxChnage(value: number) {
    this.maxChange.emit(value);
  }
}
