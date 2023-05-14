import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-toggle-content',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    FormsModule,
  ],
  templateUrl: './toggle-content.component.html',
  styleUrls: ['./toggle-content.component.scss'],
})
export class ToggleContentComponent {

  active = true;

}
