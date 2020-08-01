import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifyRegisterSuccededComponent } from './notify-register-succeded.component';

describe('NotifyRegisterSuccededComponent', () => {
  let component: NotifyRegisterSuccededComponent;
  let fixture: ComponentFixture<NotifyRegisterSuccededComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifyRegisterSuccededComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifyRegisterSuccededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
