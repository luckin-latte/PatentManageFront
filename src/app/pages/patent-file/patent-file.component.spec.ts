import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentFileComponent } from './patent-file.component';

describe('PatentFileComponent', () => {
  let component: PatentFileComponent;
  let fixture: ComponentFixture<PatentFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
