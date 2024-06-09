import { Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';

export const routes: Routes = [
    {
        path: 'index',
        loadComponent: () =>
          import('./components/hero/hero.component'),
      },


      {
        path: 'cv', component: CvComponent
      },

      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: '**', redirectTo: 'index', pathMatch: 'full' },

];
