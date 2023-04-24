import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPatentAddComponent } from './my-patent-add.component';

describe('MyPatentAddComponent', () => {
  let component: MyPatentAddComponent;
  let fixture: ComponentFixture<MyPatentAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPatentAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPatentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
