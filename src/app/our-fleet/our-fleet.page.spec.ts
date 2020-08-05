import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OurFleetPage } from './our-fleet.page';

describe('OurFleetPage', () => {
  let component: OurFleetPage;
  let fixture: ComponentFixture<OurFleetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurFleetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OurFleetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
