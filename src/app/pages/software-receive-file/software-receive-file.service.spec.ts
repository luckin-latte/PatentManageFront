import { TestBed } from '@angular/core/testing';

import { SoftwareReceiveFileService } from './software-receive-file.service';

describe('SoftwareReceiveFileService', () => {
  let service: SoftwareReceiveFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwareReceiveFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
