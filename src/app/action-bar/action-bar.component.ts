import { Component, Input } from '@angular/core';

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
  handleDecrease() {
    if (this.counter > 0) {
      this.counter -= this.step;
    }
  }
  handleIncrease() {
    if (this.counter < 100) {
      this.counter += this.step;
    }
  }
}
