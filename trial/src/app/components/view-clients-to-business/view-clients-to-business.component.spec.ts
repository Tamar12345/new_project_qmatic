import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClientsToBusinessComponent } from './view-clients-to-business.component';

describe('ViewClientsToBusinessComponent', () => {
  let component: ViewClientsToBusinessComponent;
  let fixture: ComponentFixture<ViewClientsToBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewClientsToBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClientsToBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
