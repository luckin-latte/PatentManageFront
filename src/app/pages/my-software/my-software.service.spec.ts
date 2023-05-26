import { TestBed } from '@angular/core/testing';

import { MySoftwareService } from './my-software.service';

describe('MySoftwareService', () => {
  let service: MySoftwareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySoftwareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
