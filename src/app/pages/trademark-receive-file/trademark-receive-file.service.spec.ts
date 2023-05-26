import { TestBed } from '@angular/core/testing';

import { TrademarkReceiveFileService } from './trademark-receive-file.service';

describe('TrademarkReceiveFileService', () => {
  let service: TrademarkReceiveFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrademarkReceiveFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
