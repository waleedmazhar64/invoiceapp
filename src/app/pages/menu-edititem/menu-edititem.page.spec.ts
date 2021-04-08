import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEdititemPage } from './menu-edititem.page';

describe('MenuEdititemPage', () => {
  let component: MenuEdititemPage;
  let fixture: ComponentFixture<MenuEdititemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEdititemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEdititemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
