import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAsClientComponent } from './enter-as-client.component';

describe('EnterAsClientComponent', () => {
  let component: EnterAsClientComponent;
  let fixture: ComponentFixture<EnterAsClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterAsClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterAsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
