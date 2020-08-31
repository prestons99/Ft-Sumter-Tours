import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirstBattlePage } from './first-battle.page';

describe('FirstBattlePage', () => {
  let component: FirstBattlePage;
  let fixture: ComponentFixture<FirstBattlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstBattlePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirstBattlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
