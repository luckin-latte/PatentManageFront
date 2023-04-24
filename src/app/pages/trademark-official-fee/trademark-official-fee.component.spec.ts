import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkOfficialFeeComponent } from './trademark-official-fee.component';

describe('TrademarkOfficialFeeComponent', () => {
  let component: TrademarkOfficialFeeComponent;
  let fixture: ComponentFixture<TrademarkOfficialFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkOfficialFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkOfficialFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
