import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentBonusComponent } from './patent-bonus.component';

describe('PatentBonusComponent', () => {
  let component: PatentBonusComponent;
  let fixture: ComponentFixture<PatentBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
