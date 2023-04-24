import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkStatisticsComponent } from './trademark-statistics.component';

describe('TrademarkStatisticsComponent', () => {
  let component: TrademarkStatisticsComponent;
  let fixture: ComponentFixture<TrademarkStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
