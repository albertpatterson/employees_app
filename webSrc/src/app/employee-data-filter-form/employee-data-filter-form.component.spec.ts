import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFilterFormComponent } from './employee-filter-form.component';

describe('EmployeeFilterFormComponent', () => {
  let component: EmployeeFilterFormComponent;
  let fixture: ComponentFixture<EmployeeFilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
