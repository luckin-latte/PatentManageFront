import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPatentComponent } from './my-patent.component';

describe('MyPatentComponent', () => {
  let component: MyPatentComponent;
  let fixture: ComponentFixture<MyPatentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPatentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPatentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
