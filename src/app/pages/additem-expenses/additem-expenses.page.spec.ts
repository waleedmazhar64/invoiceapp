import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemExpensesPage } from './additem-expenses.page';

describe('AdditemExpensesPage', () => {
  let component: AdditemExpensesPage;
  let fixture: ComponentFixture<AdditemExpensesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditemExpensesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemExpensesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
