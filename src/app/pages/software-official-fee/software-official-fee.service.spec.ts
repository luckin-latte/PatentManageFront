import { TestBed } from '@angular/core/testing';

import { SoftwareOfficialFeeService } from './software-official-fee.service';

describe('SoftwareOfficialFeeService', () => {
  let service: SoftwareOfficialFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwareOfficialFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
