import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessHomePageForClientComponent } from './business-home-page-for-client.component';

describe('BusinessHomePageForClientComponent', () => {
  let component: BusinessHomePageForClientComponent;
  let fixture: ComponentFixture<BusinessHomePageForClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessHomePageForClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessHomePageForClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
