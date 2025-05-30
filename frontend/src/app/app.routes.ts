import { Routes } from '@angular/router';
import { environment } from '@env';

export const routes: Routes = [
  {
    title: 'Home',
    path: environment.baseRoute,
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        children: [],
      },
    ],
  },
  { path: '**', redirectTo: environment.baseRoute },
];
