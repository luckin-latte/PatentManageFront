import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareBonusComponent } from './software-bonus.component';

describe('SoftwareBonusComponent', () => {
  let component: SoftwareBonusComponent;
  let fixture: ComponentFixture<SoftwareBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwareBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
