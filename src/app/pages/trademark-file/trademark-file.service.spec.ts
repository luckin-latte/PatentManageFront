import { TestBed } from '@angular/core/testing';

import { TrademarkFileService } from './trademark-file.service';

describe('TrademarkFileService', () => {
  let service: TrademarkFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrademarkFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
