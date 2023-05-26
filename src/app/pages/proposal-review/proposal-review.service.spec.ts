import { TestBed } from '@angular/core/testing';

import { ProposalReviewService } from './proposal-review.service';

describe('ProposalReviewService', () => {
  let service: ProposalReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProposalReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
