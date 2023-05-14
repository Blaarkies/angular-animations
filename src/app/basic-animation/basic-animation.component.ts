import {
  animate,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ToggleContentComponent } from '../toggle-content/toggle-content.component';

@Component({
  selector: 'app-basic-animation',
  standalone: true,
  imports: [CommonModule, ToggleContentComponent, MatIconModule],
  templateUrl: './basic-animation.component.html',
  styleUrls: ['./basic-animation.component.scss'],
  animations: [
    trigger('myAnime', [
      transition(':enter', [
        style({opacity: 0}),
        animate(2000, style({opacity: 1})),
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate(2000, style({opacity: 0})),
      ]),
    ]),
  ],
})
export default class BasicAnimationComponent {

}
