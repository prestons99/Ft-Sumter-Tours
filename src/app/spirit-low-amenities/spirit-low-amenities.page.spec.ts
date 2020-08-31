import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpiritLowAmenitiesPage } from './spirit-low-amenities.page';

describe('SpiritLowAmenitiesPage', () => {
  let component: SpiritLowAmenitiesPage;
  let fixture: ComponentFixture<SpiritLowAmenitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritLowAmenitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpiritLowAmenitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
