import { TestBed } from '@angular/core/testing';

import { MarkdownWithAIService } from './markdown-with-ai.service';

describe('MarkdownWithAIService', () => {
  let service: MarkdownWithAIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkdownWithAIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
