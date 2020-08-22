import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeaconLocationsPage } from './beacon-locations.page';

describe('BeaconLocationsPage', () => {
  let component: BeaconLocationsPage;
  let fixture: ComponentFixture<BeaconLocationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeaconLocationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeaconLocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
