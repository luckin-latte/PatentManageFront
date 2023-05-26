import { TestBed } from '@angular/core/testing';

import { MyTrademarkService } from './my-trademark.service';

describe('MyTrademarkService', () => {
  let service: MyTrademarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTrademarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
