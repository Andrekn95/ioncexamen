import { Routes } from '@angular/router';
import {LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
{
  path:'login',
  component: LoginComponent, 
},
{
  path:'home',
  component: HomeComponent, 
}
];
