import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-multiple-states',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatIconModule,

  ],
  templateUrl: './multiple-states.component.html',
  styleUrls: ['./multiple-states.component.scss'],
  animations: [
    trigger('multiState', [
      state('idle, void', style({color: '#77f4ff'})),
      state('loading', style({color: '#7878ff'})),
      state('success', style({color: '#1eb200'})),
      state('failed', style({color: '#ff0c48'})),
      state('disabled', style({color: '#858585'})),

      transition('* => failed', [
        animate('300ms cubic-bezier(0.2,-2, 0.7, 1)', keyframes([
          style({translate: '0'}),
          style({translate: '20px'}),
          style({translate: '0'}),
        ])),
        animate(1000),
      ]),
      transition('* => *', [animate(1000)]),
    ]),
  ],
})
export default class MultipleStatesComponent {
  states = [
    'idle',
    'loading',
    'success',
    'failed',
    'disabled',
  ];
  radioButtons = this.states.map(s => ({
    id: s, label: s[0].toUpperCase() + s.slice(1),
  }));
  selected = this.states[0];
}
