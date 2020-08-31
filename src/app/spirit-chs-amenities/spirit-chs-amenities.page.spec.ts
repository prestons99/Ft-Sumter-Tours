import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpiritChsAmenitiesPage } from './spirit-chs-amenities.page';

describe('SpiritChsAmenitiesPage', () => {
  let component: SpiritChsAmenitiesPage;
  let fixture: ComponentFixture<SpiritChsAmenitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritChsAmenitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpiritChsAmenitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
