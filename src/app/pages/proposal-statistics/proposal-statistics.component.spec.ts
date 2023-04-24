import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalStatisticsComponent } from './proposal-statistics.component';

describe('ProposalStatisticsComponent', () => {
  let component: ProposalStatisticsComponent;
  let fixture: ComponentFixture<ProposalStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
