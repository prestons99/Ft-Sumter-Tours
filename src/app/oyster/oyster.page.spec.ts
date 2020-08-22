import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OysterPage } from './oyster.page';

describe('OysterPage', () => {
  let component: OysterPage;
  let fixture: ComponentFixture<OysterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OysterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OysterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
