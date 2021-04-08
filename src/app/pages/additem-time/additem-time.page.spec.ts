import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemTimePage } from './additem-time.page';

describe('AdditemTimePage', () => {
  let component: AdditemTimePage;
  let fixture: ComponentFixture<AdditemTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditemTimePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
