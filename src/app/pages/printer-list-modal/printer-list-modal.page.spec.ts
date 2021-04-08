import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrinterListModalPage } from './printer-list-modal.page';

describe('PrinterListModalPage', () => {
  let component: PrinterListModalPage;
  let fixture: ComponentFixture<PrinterListModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrinterListModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrinterListModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
