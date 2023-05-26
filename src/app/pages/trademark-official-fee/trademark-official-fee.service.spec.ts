import { TestBed } from '@angular/core/testing';

import { TrademarkOfficialFeeService } from './trademark-official-fee.service';

describe('TrademarkOfficialFeeService', () => {
  let service: TrademarkOfficialFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrademarkOfficialFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
