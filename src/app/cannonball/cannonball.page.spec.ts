import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CannonballPage } from './cannonball.page';

describe('CannonballPage', () => {
  let component: CannonballPage;
  let fixture: ComponentFixture<CannonballPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CannonballPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CannonballPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
