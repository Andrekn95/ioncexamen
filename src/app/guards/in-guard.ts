import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

export const inGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.hasUser()) {
    return true;
  }

  alert('Debes iniciar sesión para acceder a esta página');
  router.navigateByUrl('/login'); 
  return false;
};
