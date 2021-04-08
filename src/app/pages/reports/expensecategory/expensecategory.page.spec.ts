import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpensecategoryPage } from './expensecategory.page';

describe('ExpensecategoryPage', () => {
  let component: ExpensecategoryPage;
  let fixture: ComponentFixture<ExpensecategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensecategoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensecategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
