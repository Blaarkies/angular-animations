import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ToggleContentComponent } from '../toggle-content/toggle-content.component';

@Component({
  selector: 'app-shorthand-animation',
  standalone: true,
  imports: [CommonModule, ToggleContentComponent, MatIconModule],
  templateUrl: './shorthand-animation.component.html',
  styleUrls: ['./shorthand-animation.component.scss'],
  animations: [
    trigger('fadeInAndOut', [
      state('false, void', style({opacity: 0})),
      state('true', style({opacity: 1})),
      transition(':enter, :leave', [animate(2000)]),
    ]),
  ],
})
export default class ShorthandAnimationComponent {
}
