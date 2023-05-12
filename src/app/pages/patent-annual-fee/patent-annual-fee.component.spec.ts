import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentAnnualFeeComponent } from './patent-annual-fee.component';

describe('PatentAnnualFeeComponent', () => {
  let component: PatentAnnualFeeComponent;
  let fixture: ComponentFixture<PatentAnnualFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentAnnualFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentAnnualFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
