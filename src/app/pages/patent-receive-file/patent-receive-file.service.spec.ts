import { TestBed } from '@angular/core/testing';

import { PatentReceiveFileService } from './patent-receive-file.service';

describe('PatentReceiveFileService', () => {
  let service: PatentReceiveFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatentReceiveFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
