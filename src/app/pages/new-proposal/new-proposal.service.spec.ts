import { TestBed } from '@angular/core/testing';

import { NewProposalService } from './new-proposal.service';

describe('NewProposalService', () => {
  let service: NewProposalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewProposalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
