import { CanActivateFn } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const contributorGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  const formationId: number = parseInt(route.paramMap.get('id') ?? '');

  try {
    await authService.isContributor(formationId).toPromise();
    return true;
  } catch (error) {
    return router.parseUrl('/');
  }
  
};
