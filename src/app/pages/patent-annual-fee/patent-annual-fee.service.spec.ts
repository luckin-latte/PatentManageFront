import { TestBed } from '@angular/core/testing';

import { PatentAnnualFeeService } from './patent-annual-fee.service';

describe('PatentAnnualFeeService', () => {
  let service: PatentAnnualFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatentAnnualFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
