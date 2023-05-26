import { TestBed } from '@angular/core/testing';

import { ParticipatedProposalService } from './participated-proposal.service';

describe('ParticipatedProposalService', () => {
  let service: ParticipatedProposalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipatedProposalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
