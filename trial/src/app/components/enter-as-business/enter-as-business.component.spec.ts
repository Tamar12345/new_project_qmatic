import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAsBusinessComponent } from './enter-as-business.component';

describe('EnterAsBusinessComponent', () => {
  let component: EnterAsBusinessComponent;
  let fixture: ComponentFixture<EnterAsBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterAsBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterAsBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
