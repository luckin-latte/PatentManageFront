import { TestBed } from '@angular/core/testing';

import { TrademarkPostFileService } from './trademark-post-file.service';

describe('TrademarkPostFileService', () => {
  let service: TrademarkPostFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrademarkPostFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
