import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.css',
})
export class ActionBarComponent {
  @Input() step: number = 1;
  @Input() counter: number = 0;
  @Output() counterChange = new EventEmitter();

  handleDecrease() {
    if (this.counter > 0) {
      this.counter -= this.step;
      this.counterChange.emit(this.counter);
    }
  }
  handleIncrease() {
    if (this.counter < 100) {
      this.counter += this.step;
      this.counterChange.emit(this.counter);
    }
  }
}
