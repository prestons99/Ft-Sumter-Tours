import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StrugglePage } from './struggle.page';

describe('StrugglePage', () => {
  let component: StrugglePage;
  let fixture: ComponentFixture<StrugglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrugglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StrugglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
