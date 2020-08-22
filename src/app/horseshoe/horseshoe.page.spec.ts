import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorseshoePage } from './horseshoe.page';

describe('HorseshoePage', () => {
  let component: HorseshoePage;
  let fixture: ComponentFixture<HorseshoePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorseshoePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorseshoePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
