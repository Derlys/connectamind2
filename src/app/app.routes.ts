import { Route } from '@angular/router';

export const appRoutes: Route[] = [

  {
    path:'',
    loadComponent:() => import('./components/home-page.component').then(m => m.HomePageComponent),
  },
  {
    path:'settings',
    loadComponent:() => import('./components/settings-page.component').then(m => m.SettingsPageComponent),
  },{
    path:'**',
   redirectTo: '',
  }
];
