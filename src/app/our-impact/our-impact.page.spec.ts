import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OurImpactPage } from './our-impact.page';

describe('OurImpactPage', () => {
  let component: OurImpactPage;
  let fixture: ComponentFixture<OurImpactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurImpactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OurImpactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
