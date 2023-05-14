import { provideHttpClient } from '@angular/common/http';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideRouter, Routes} from "@angular/router";
import {importProvidersFrom} from "@angular/core";

const displayRoutes: Routes = [
  {
    title: 'CSS Example',
    path: 'css',
    loadComponent: () => import('./app/css-animation/css-animation.component'),
  },
  {
    title: 'Basic Animation',
    path: 'basic',
    loadComponent: () => import('./app/shorthand-animation/shorthand-animation.component'),
  },
  {
    title: 'Build My Own',
    path: 'build',
    loadComponent: () => import('./app/basic-animation/basic-animation.component'),
  },
  {
    title: 'More Control',
    path: 'control',
    loadComponent: () => import('./app/more-control/more-control.component'),
  },
  {
    title: 'States',
    path: 'states',
    loadComponent: () => import('./app/multiple-states/multiple-states.component'),
  },
  {
    title: 'Lists',
    path: 'lists',
    loadComponent: () => import('./app/children/children.component'),
  },
];

export const routes = displayRoutes;
let technicalRoutes = displayRoutes.concat([{
  path: '**',
  redirectTo: displayRoutes[0].path,
}]);

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(),
    provideAnimations(),
    provideRouter(technicalRoutes),
    provideAnimations(),
    provideHttpClient(),
  ],
})
  .catch(err => console.error(err));
