import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpClientComponent } from './sign-up-client.component';

describe('SignUpComponent', () => {
  let component: SignUpClientComponent;
  let fixture: ComponentFixture<SignUpClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
