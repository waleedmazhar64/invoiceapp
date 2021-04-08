import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinvoicePage } from './addinvoice.page';

describe('AddinvoicePage', () => {
  let component: AddinvoicePage;
  let fixture: ComponentFixture<AddinvoicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinvoicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinvoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
