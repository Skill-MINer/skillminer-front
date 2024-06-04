import { TestBed } from '@angular/core/testing';

import { ModificationProposalService } from './modification-proposal.service';

describe('ModificationProposalService', () => {
  let service: ModificationProposalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificationProposalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
