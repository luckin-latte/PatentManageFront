import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentReceiveFileComponent } from './patent-receive-file.component';

describe('PatentReceiveFileComponent', () => {
  let component: PatentReceiveFileComponent;
  let fixture: ComponentFixture<PatentReceiveFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatentReceiveFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentReceiveFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
