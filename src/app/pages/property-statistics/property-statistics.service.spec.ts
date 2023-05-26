import { TestBed } from '@angular/core/testing';

import { PropertyStatisticsService } from './property-statistics.service';

describe('PropertyStatisticsService', () => {
  let service: PropertyStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertyStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
