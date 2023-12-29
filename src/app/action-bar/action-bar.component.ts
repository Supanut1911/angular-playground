import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css',
})
export class ActionBarComponent {
  counter = 0;
  @Input() step: number = 1;
  @Output() numberChange = new EventEmitter();

  handleDecrease() {
    if (this.counter > 0) {
      this.counter -= this.step;
      this.numberChange.emit(this.counter);
    }
  }
  handleIncrease() {
    if (this.counter < 100) {
      this.counter += this.step;
      this.numberChange.emit(this.counter);
    }
  }
}
