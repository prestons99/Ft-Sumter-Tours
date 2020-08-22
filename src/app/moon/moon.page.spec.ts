import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoonPage } from './moon.page';

describe('MoonPage', () => {
  let component: MoonPage;
  let fixture: ComponentFixture<MoonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
