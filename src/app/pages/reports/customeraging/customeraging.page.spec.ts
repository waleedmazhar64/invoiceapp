import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomeragingPage } from './customeraging.page';

describe('CustomeragingPage', () => {
  let component: CustomeragingPage;
  let fixture: ComponentFixture<CustomeragingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeragingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomeragingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
