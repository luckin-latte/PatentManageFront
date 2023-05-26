import { TestBed } from '@angular/core/testing';

import { PatentBonusService } from './patent-bonus.service';

describe('PatentBonusService', () => {
  let service: PatentBonusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatentBonusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
