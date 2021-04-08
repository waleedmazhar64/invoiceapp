import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditMemoInfoPage } from './credit-memo-info.page';

describe('CreditMemoInfoPage', () => {
  let component: CreditMemoInfoPage;
  let fixture: ComponentFixture<CreditMemoInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditMemoInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditMemoInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
