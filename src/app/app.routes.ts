import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'index',
        loadComponent: () =>
          import('./components/hero/hero.component'),
      },

];
