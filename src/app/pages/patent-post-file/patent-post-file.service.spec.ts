import { TestBed } from '@angular/core/testing';

import { PatentPostFileService } from './patent-post-file.service';

describe('PatentPostFileService', () => {
  let service: PatentPostFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatentPostFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
