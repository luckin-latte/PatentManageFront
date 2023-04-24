import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexAdministratorComponent } from './index-administrator.component';

describe('IndexAdministratorComponent', () => {
  let component: IndexAdministratorComponent;
  let fixture: ComponentFixture<IndexAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
