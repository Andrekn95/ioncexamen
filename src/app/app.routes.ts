import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { inGuard } from './guards/in-guard';
import { GpsComponent } from './service/gps/gps.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'gps',
    component: GpsComponent
  },
  {
    path: 'login/form',
    component: FormComponent,
    canActivate: [inGuard]
  },
  {
    path: 'gps',
    component: GpsComponent,
    canActivate: [inGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];