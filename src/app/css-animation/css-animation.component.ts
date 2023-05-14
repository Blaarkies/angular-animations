import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ToggleContentComponent } from '../toggle-content/toggle-content.component';

@Component({
  selector: 'app-css-animation',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    ToggleContentComponent,
  ],
  templateUrl: './css-animation.component.html',
  styleUrls: ['./css-animation.component.scss'],
})
export default class CssAnimationComponent {
}
