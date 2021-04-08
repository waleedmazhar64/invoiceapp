import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAddclientPage } from './menu-addclient.page';

describe('MenuAddclientPage', () => {
  let component: MenuAddclientPage;
  let fixture: ComponentFixture<MenuAddclientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAddclientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAddclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
