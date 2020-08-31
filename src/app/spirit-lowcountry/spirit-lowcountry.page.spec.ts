import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpiritLowcountryPage } from './spirit-lowcountry.page';

describe('SpiritLowcountryPage', () => {
  let component: SpiritLowcountryPage;
  let fixture: ComponentFixture<SpiritLowcountryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritLowcountryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpiritLowcountryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
