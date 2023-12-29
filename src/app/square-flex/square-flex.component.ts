import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-flex',
  standalone: true,
  imports: [],
  templateUrl: './square-flex.component.html',
  styleUrl: './square-flex.component.css',
})
export class SquareFlexComponent {
  @Input() divWidth: number = 200;
  @Input() divHight: number = 200;
}
