import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActionBarComponent } from './action-bar/action-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ActionBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  value = 0;

  handleCalculateBuffet(priceBuffetInput: string) {
    this.value = (+priceBuffetInput * 3) / 4;
  }
}
