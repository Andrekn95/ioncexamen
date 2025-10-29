// in-guard.ts - VERIFICA QUE ESTÉ ASÍ
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

export const inGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log('GUARD - Verificando autenticación...');
  
  if (authService.hasUser()) {
    console.log('GUARD - Acceso PERMITIDO');
    return true;
  }
  
  console.log('GUARD - Acceso DENEGADO');
  alert('Debes iniciar sesión para acceder a esta página');
  router.navigate(['/login']);
  return false;
};