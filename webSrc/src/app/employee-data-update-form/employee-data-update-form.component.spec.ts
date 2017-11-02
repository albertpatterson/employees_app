import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDataUpdateFormComponent } from './employee-data-update-form.component';

describe('EmployeeDataFormComponent', () => {
  let component: EmployeeDataUpdateFormComponent;
  let fixture: ComponentFixture<EmployeeDataUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDataUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDataUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
