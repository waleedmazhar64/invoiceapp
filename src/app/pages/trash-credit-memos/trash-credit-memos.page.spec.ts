import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashCreditMemosPage } from './trash-credit-memos.page';

describe('TrashCreditMemosPage', () => {
  let component: TrashCreditMemosPage;
  let fixture: ComponentFixture<TrashCreditMemosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashCreditMemosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashCreditMemosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
