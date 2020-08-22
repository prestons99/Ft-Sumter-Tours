import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OspreyPage } from './osprey.page';

describe('OspreyPage', () => {
  let component: OspreyPage;
  let fixture: ComponentFixture<OspreyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OspreyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OspreyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
