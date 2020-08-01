import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFilterBusinessComponent } from './show-filter-business.component';

describe('ShowFilterBusinessComponent', () => {
  let component: ShowFilterBusinessComponent;
  let fixture: ComponentFixture<ShowFilterBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFilterBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFilterBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
