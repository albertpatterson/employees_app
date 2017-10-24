import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterableEmployeeDataComponent } from './filterable-employee-data.component';

describe('FilterableEmployeeDataComponent', () => {
  let component: FilterableEmployeeDataComponent;
  let fixture: ComponentFixture<FilterableEmployeeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterableEmployeeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterableEmployeeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
