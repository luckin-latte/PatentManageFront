import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantentAnnualFeeComponent } from './pantent-annual-fee.component';

describe('PantentAnnualFeeComponent', () => {
  let component: PantentAnnualFeeComponent;
  let fixture: ComponentFixture<PantentAnnualFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantentAnnualFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantentAnnualFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
