import { TestBed } from '@angular/core/testing';

import { MergeEditProposalsService } from './merge-edit-proposals.service';

describe('MergeEditProposalsService', () => {
  let service: MergeEditProposalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MergeEditProposalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
