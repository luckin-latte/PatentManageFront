import { TestBed } from '@angular/core/testing';

import { SoftwareBonusService } from './software-bonus.service';

describe('SoftwareBonusService', () => {
  let service: SoftwareBonusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwareBonusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
