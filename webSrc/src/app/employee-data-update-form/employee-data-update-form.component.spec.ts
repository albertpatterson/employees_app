import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDataFormComponent } from './employee-data-form.component';

describe('EmployeeDataFormComponent', () => {
  let component: EmployeeDataFormComponent;
  let fixture: ComponentFixture<EmployeeDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
