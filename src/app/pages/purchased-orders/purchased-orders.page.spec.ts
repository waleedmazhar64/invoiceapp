import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasedOrdersPage } from './purchased-orders.page';

describe('PurchasedOrdersPage', () => {
  let component: PurchasedOrdersPage;
  let fixture: ComponentFixture<PurchasedOrdersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasedOrdersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasedOrdersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
