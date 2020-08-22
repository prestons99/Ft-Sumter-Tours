import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EgretPage } from './egret.page';

describe('EgretPage', () => {
  let component: EgretPage;
  let fixture: ComponentFixture<EgretPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EgretPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EgretPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
