import { TestBed } from '@angular/core/testing';

import { MyProposalService } from './my-proposal.service';

describe('MyProposalService', () => {
  let service: MyProposalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyProposalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
