import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import {inject} from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const valide = false;
  if (valide) {
    return true;
  }
  return router.parseUrl('/login');
};
