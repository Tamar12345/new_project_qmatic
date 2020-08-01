import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpFirstDefinitionComponent } from './set-up-first-definition.component';

describe('SetUpFirstDefinitionComponent', () => {
  let component: SetUpFirstDefinitionComponent;
  let fixture: ComponentFixture<SetUpFirstDefinitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetUpFirstDefinitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUpFirstDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
