import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentOfficialFeeComponent } from './patent-official-fee.component';

describe('PatentOfficialFeeComponent', () => {
  let component: PatentOfficialFeeComponent;
  let fixture: ComponentFixture<PatentOfficialFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentOfficialFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentOfficialFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
