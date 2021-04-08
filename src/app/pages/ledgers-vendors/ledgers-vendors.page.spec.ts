import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LedgersVendorsPage } from './ledgers-vendors.page';

describe('LedgersVendorsPage', () => {
  let component: LedgersVendorsPage;
  let fixture: ComponentFixture<LedgersVendorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgersVendorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LedgersVendorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
