import { TestBed } from '@angular/core/testing';

import { ProposalStatisticsService } from './proposal-statistics.service';

describe('ProposalStatisticsService', () => {
  let service: ProposalStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProposalStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
