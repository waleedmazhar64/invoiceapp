import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemamountPage } from './itemamount.page';

describe('ItemamountPage', () => {
  let component: ItemamountPage;
  let fixture: ComponentFixture<ItemamountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemamountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemamountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
