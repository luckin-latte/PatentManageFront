import { TestBed } from '@angular/core/testing';

import { DepartmentSoftwareService } from './department-software.service';

describe('DepartmentSoftwareService', () => {
  let service: DepartmentSoftwareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentSoftwareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
