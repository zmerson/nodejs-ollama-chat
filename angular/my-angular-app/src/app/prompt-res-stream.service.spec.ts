import { TestBed } from '@angular/core/testing';

import { PromptResStreamService } from './prompt-res-stream.service';

describe('PromptResStreamService', () => {
  let service: PromptResStreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromptResStreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
