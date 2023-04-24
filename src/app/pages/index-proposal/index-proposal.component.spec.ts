import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexProposalComponent } from './index-proposal.component';

describe('IndexProposalComponent', () => {
  let component: IndexProposalComponent;
  let fixture: ComponentFixture<IndexProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
