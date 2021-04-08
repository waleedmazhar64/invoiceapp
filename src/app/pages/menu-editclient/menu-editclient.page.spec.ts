import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEditclientPage } from './menu-editclient.page';

describe('MenuEditclientPage', () => {
  let component: MenuEditclientPage;
  let fixture: ComponentFixture<MenuEditclientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEditclientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEditclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
