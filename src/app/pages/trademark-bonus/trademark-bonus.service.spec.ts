import { TestBed } from '@angular/core/testing';

import { TrademarkBonusService } from './trademark-bonus.service';

describe('TrademarkBonusService', () => {
  let service: TrademarkBonusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrademarkBonusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
