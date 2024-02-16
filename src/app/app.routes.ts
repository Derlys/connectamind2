import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home-page.component').then((m) => m.HomePageComponent),
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings-page.component').then(
        (m) => m.SettingsPageComponent,
      ),
  },

  {
    path: 'balance',
    loadComponent: () =>
      import('./pages/balance-page.component').then(
        (m) => m.BalancePageComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
