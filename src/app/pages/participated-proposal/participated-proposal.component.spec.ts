import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipatedProposalComponent } from './participated-proposal.component';

describe('ParticipatedProposalComponent', () => {
  let component: ParticipatedProposalComponent;
  let fixture: ComponentFixture<ParticipatedProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipatedProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipatedProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
