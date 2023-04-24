import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentPostFileComponent } from './patent-post-file.component';

describe('PatentPostFileComponent', () => {
  let component: PatentPostFileComponent;
  let fixture: ComponentFixture<PatentPostFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentPostFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentPostFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
