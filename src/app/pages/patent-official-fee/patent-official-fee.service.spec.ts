import { TestBed } from '@angular/core/testing';

import { PatentOfficialFeeService } from './patent-official-fee.service';

describe('PatentOfficialFeeService', () => {
  let service: PatentOfficialFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatentOfficialFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
