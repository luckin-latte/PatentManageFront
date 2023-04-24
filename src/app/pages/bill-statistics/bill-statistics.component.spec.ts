import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillStatisticsComponent } from './bill-statistics.component';

describe('BillStatisticsComponent', () => {
  let component: BillStatisticsComponent;
  let fixture: ComponentFixture<BillStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
