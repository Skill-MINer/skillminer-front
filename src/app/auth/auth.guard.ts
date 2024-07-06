import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '@services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  console.log(authService.isLoggedIn());
  if (authService.isLoggedIn()) {
    return true;
  }
  return router.parseUrl('/login');
};
