import { TestBed } from '@angular/core/testing';

import { DepartmentProposalService } from './department-proposal.service';

describe('DepartmentProposalService', () => {
  let service: DepartmentProposalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentProposalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
