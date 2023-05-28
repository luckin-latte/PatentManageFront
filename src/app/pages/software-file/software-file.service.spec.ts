import { TestBed } from '@angular/core/testing';

import { SoftwareFileService } from './software-file.service';

describe('SoftwareFileService', () => {
  let service: SoftwareFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwareFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
