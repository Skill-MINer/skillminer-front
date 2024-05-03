import { TestBed } from '@angular/core/testing';

import { ScrollToAnchorService } from './scroll-to-anchor.service';

describe('ScrollToAnchorService', () => {
  let service: ScrollToAnchorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollToAnchorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
