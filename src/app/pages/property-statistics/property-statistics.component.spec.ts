import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyStatisticsComponent } from './property-statistics.component';

describe('PropertyStatisticsComponent', () => {
  let component: PropertyStatisticsComponent;
  let fixture: ComponentFixture<PropertyStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
