import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerstatementPage } from './customerstatement.page';

describe('CustomerstatementPage', () => {
  let component: CustomerstatementPage;
  let fixture: ComponentFixture<CustomerstatementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerstatementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerstatementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
