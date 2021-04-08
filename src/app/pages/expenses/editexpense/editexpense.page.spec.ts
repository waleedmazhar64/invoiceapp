import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexpensePage } from './editexpense.page';

describe('EditexpensePage', () => {
  let component: EditexpensePage;
  let fixture: ComponentFixture<EditexpensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditexpensePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditexpensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
