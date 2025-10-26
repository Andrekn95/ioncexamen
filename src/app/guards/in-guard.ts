import { CanActivateFn } from '@angular/router';

export const inGuard: CanActivateFn = (route, state) => {
  return true;
};
