import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalFilesComponent } from './proposal-files.component';

describe('ProposalFilesComponent', () => {
  let component: ProposalFilesComponent;
  let fixture: ComponentFixture<ProposalFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProposalFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
