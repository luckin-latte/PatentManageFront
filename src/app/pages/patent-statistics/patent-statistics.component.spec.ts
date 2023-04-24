import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentStatisticsComponent } from './patent-statistics.component';

describe('PatentStatisticsComponent', () => {
  let component: PatentStatisticsComponent;
  let fixture: ComponentFixture<PatentStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
