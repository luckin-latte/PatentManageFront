import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonusStatisticsComponent } from './bonus-statistics.component';

describe('BonusStatisticsComponent', () => {
  let component: BonusStatisticsComponent;
  let fixture: ComponentFixture<BonusStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonusStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonusStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
