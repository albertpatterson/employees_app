import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDataFilterFormComponent } from './employee-data-filter-form.component';

describe('EmployeeFilterFormComponent', () => {
  let component: EmployeeDataFilterFormComponent;
  let fixture: ComponentFixture<EmployeeDataFilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDataFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDataFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
