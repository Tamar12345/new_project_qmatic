import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterToBusinessComponent } from './register-to-business.component';

describe('RegisterToBusinessComponent', () => {
  let component: RegisterToBusinessComponent;
  let fixture: ComponentFixture<RegisterToBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterToBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterToBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
