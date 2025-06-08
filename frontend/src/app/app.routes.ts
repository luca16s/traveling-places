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
        children: [
          {
            path: 'mapa',
            title: 'Lugares Viajados',
            loadComponent: () =>
              import('@pages').then((m) => m.LugaresVisitadosComponent),
          },
        ],
      },
      {
        path: 'viagem',
        title: 'Viagens',
        children: [
          {
            path: 'nova',
            title: 'Criar Viagem',
            loadComponent: () =>
              import('@pages').then((m) => m.ViagemComponent),
          },
        ],
      },
      {
        path: 'local',
        title: 'Locais',
        children: [
          {
            path: 'novo',
            title: 'Criar Local',
            loadComponent: () => import('@pages').then((m) => m.LocalComponent),
          },
        ],
      },
    ],
  },
  { path: '**', redirectTo: environment.baseRoute },
];
