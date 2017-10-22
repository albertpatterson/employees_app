import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTabComponent } from './update-tab.component';

describe('UpdateTabComponent', () => {
  let component: UpdateTabComponent;
  let fixture: ComponentFixture<UpdateTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
