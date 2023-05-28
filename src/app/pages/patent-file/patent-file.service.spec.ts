import { TestBed } from '@angular/core/testing';

import { PatentFileService } from './patent-file.service';

describe('PatentFileService', () => {
  let service: PatentFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatentFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
