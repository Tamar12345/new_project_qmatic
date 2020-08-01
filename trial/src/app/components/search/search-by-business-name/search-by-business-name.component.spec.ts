import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByBusinessNameComponent } from './search-by-business-name.component';

describe('SearchByBusinessNameComponent', () => {
  let component: SearchByBusinessNameComponent;
  let fixture: ComponentFixture<SearchByBusinessNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByBusinessNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByBusinessNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
