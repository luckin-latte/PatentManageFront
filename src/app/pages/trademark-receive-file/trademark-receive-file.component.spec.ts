import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrademarkReceiveFileComponent } from './trademark-receive-file.component';

describe('TrademarkReceiveFileComponent', () => {
  let component: TrademarkReceiveFileComponent;
  let fixture: ComponentFixture<TrademarkReceiveFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrademarkReceiveFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrademarkReceiveFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
