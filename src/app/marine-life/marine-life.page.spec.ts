import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarineLifePage } from './marine-life.page';

describe('MarineLifePage', () => {
  let component: MarineLifePage;
  let fixture: ComponentFixture<MarineLifePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarineLifePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarineLifePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
