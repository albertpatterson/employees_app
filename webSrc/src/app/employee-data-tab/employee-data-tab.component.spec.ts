import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDataTabComponent } from './employee-data-tab.component';

describe('CustomTabComponent', () => {
  let component: EmployeeDataTabComponent;
  let fixture: ComponentFixture<EmployeeDataTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDataTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDataTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
