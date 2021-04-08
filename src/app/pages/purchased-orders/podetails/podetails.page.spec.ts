import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PodetailsPage } from './podetails.page';

describe('PodetailsPage', () => {
  let component: PodetailsPage;
  let fixture: ComponentFixture<PodetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PodetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PodetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
