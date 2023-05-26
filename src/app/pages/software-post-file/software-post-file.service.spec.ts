import { TestBed } from '@angular/core/testing';

import { SoftwarePostFileService } from './software-post-file.service';

describe('SoftwarePostFileService', () => {
  let service: SoftwarePostFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwarePostFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
