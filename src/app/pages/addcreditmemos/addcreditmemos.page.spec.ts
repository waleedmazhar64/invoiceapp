import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcreditmemosPage } from './addcreditmemos.page';

describe('AddcreditmemosPage', () => {
  let component: AddcreditmemosPage;
  let fixture: ComponentFixture<AddcreditmemosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcreditmemosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcreditmemosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
