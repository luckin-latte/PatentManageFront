import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTrademarkComponent } from './my-trademark.component';

describe('MyTrademarkComponent', () => {
  let component: MyTrademarkComponent;
  let fixture: ComponentFixture<MyTrademarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTrademarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTrademarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
