import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkBonusComponent } from './trademark-bonus.component';

describe('TrademarkBonusComponent', () => {
  let component: TrademarkBonusComponent;
  let fixture: ComponentFixture<TrademarkBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
