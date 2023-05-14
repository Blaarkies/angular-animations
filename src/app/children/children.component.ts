import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

interface IdLabel {
  id: number;
  label: string;
}

@Component({
  selector: 'app-children',
  standalone: true,
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('mat-list-item', [
          style({opacity: 0, translate: '-400px'}),
          stagger(30, [
            animate('300ms ease-out', style({opacity: 1, translate: '0'})),
          ]),
        ]),
      ]),

      transition(':increment', [
        query(':enter', [
          style({opacity: 0, translate: '-400px'}),
        ]),
        query('mat-list-item:not(:enter)', [
          style({translate: '0 -110%'}),
          animate('200ms ease-out', style({translate: '0'})),
        ], {optional: true}),
        query(':enter', [
          animate('300ms ease-out', style({opacity: 1, translate: '0'})),
        ]),
      ]),

      transition(':decrement', [
        query(':leave', [
          style({opacity: 1, translate: '0'}),
          animate('300ms ease-in', style({opacity: 0, translate: '400px'})),
        ]),
        query(':leave ~ mat-list-item', [
          style({translate: '0 0'}),
          animate('200ms ease-out', style({translate: '0 -110%'})),
        ], {optional: true}),
      ]),
    ]),
  ],
})
export default class ChildrenComponent {

  games = [
    'Super Mario World',
    'The Legend of Zelda',
    'Sonic the Hedgehog 2',
    'Super Metroid',
    'Doom',
    'Street Fighter II',
    'Chrono Trigger',
    'Super Mario Kart',
    'Final Fantasy VII',
    'Pokémon Red and Blue',
    'Mortal Kombat II',
    'Donkey Kong Country',
    'Metal Gear Solid',
    'Star Fox',
    'Castlevania',
    'Resident Evil',
    'Mega Man X',
    'GoldenEye 007',
    'Diablo',
    'Crash Bandicoot',
  ];
  catalog: IdLabel[] = this.games.map((label, id) => ({id, label}));
  list = this.catalog.slice(0, 10);

  trackGameId(index: number, value: IdLabel): number {
    return value.id;
  }

  remove(item: IdLabel) {
    this.list = this.list.filter(g => g !== item);
  }

  addTop() {
    let remains = this.catalog.filter(g => !this.list.includes(g));
    let shuffledRemains = this.shuffle(remains);
    this.list.unshift(shuffledRemains[0]);
  }

  addRandom() {
    let remains = this.catalog.filter(g => !this.list.includes(g));
    let shuffledRemains = this.shuffle(remains);
    let floatIndexToSpliceInto = (this.list.length - 1) * Math.random();
    let intIndexToSpliceInto = Math.round(floatIndexToSpliceInto);
    this.list.splice(intIndexToSpliceInto, 0, shuffledRemains[0]);
  }

  shuffleList() {
    this.list = this.shuffle(this.list);
  }

  private shuffle<T>(list: T[]): T[] {
    return list
      .map(item => ({sort: Math.random(), item}))
      .sort((a, b) => a.sort - b.sort)
      .map(({item}) => item);
  }

}
