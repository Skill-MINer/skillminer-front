import { TestBed } from '@angular/core/testing';

import { CreateFormationService } from './create-formation.service';

describe('CreateFormationService', () => {
  let service: CreateFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
