import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorEditPage } from './vendor-edit.page';

describe('VendorEditPage', () => {
  let component: VendorEditPage;
  let fixture: ComponentFixture<VendorEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
