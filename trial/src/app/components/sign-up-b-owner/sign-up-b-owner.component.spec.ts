import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpBOwnerComponent } from './sign-up-b-owner.component';

describe('SignUpBOwnerComponent', () => {
  let component: SignUpBOwnerComponent;
  let fixture: ComponentFixture<SignUpBOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpBOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpBOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
