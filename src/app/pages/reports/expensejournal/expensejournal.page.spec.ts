import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpensejournalPage } from './expensejournal.page';

describe('ExpensejournalPage', () => {
  let component: ExpensejournalPage;
  let fixture: ComponentFixture<ExpensejournalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensejournalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpensejournalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
