import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMemosPage } from './credit-memos.page';

describe('CreditMemosPage', () => {
  let component: CreditMemosPage;
  let fixture: ComponentFixture<CreditMemosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditMemosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMemosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
