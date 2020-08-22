import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AmenitiesPage } from './amenities.page';

describe('AmenitiesPage', () => {
  let component: AmenitiesPage;
  let fixture: ComponentFixture<AmenitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmenitiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AmenitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
