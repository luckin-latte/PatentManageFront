import { TestBed } from '@angular/core/testing';

import { MyPatentService } from './my-patent.service';

describe('MyPatentService', () => {
  let service: MyPatentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPatentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
