import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientClientsPage } from './add-client-clients.page';

describe('AddClientClientsPage', () => {
  let component: AddClientClientsPage;
  let fixture: ComponentFixture<AddClientClientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientClientsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
