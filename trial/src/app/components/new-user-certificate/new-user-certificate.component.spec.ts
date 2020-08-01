import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserCertificateComponent } from './new-user-certificate.component';

describe('NewUserCertificateComponent', () => {
  let component: NewUserCertificateComponent;
  let fixture: ComponentFixture<NewUserCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
