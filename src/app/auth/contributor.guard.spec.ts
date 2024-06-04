import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { contributorGuard } from './contributor.guard';

describe('contributorGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => contributorGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
