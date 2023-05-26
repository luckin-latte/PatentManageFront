import { TestBed } from '@angular/core/testing';

import { DepartmentTrademarkService } from './department-trademark.service';

describe('DepartmentTrademarkService', () => {
  let service: DepartmentTrademarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentTrademarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
