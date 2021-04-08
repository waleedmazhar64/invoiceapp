import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuarterPage } from './quarter.page';

describe('QuarterPage', () => {
  let component: QuarterPage;
  let fixture: ComponentFixture<QuarterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuarterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuarterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
