import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultcommentPage } from './defaultcomment.page';

describe('DefaultcommentPage', () => {
  let component: DefaultcommentPage;
  let fixture: ComponentFixture<DefaultcommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultcommentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultcommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
