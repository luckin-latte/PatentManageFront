import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentProposalComponent } from './department-proposal.component';

describe('DepartmentProposalComponent', () => {
  let component: DepartmentProposalComponent;
  let fixture: ComponentFixture<DepartmentProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
