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
  selector: 'app-more-control',
  standalone: true,
  imports: [CommonModule, ToggleContentComponent, MatIconModule],
  templateUrl: './more-control.component.html',
  styleUrls: ['./more-control.component.scss'],
  animations: [
    trigger('myAnime', [
      transition('false => true', [
        style({translate: '0'}),
        animate(1000, style({translate: '100px'})),
      ]),
      transition('true => false', [
        style({translate: '100px'}),
        animate(1000, style({translate: '0'})),
      ]),
      state('true', style({translate: '100px'})),
    ]),
  ],
})
export default class MoreControlComponent {

}
