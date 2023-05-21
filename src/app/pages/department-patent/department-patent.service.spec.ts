import { TestBed } from '@angular/core/testing';

import { DepartmentPatentService } from './department-patent.service';

describe('DepartmentPatentService', () => {
  let service: DepartmentPatentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentPatentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
