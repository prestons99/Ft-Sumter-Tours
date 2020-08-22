import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarnaclePage } from './barnacle.page';

describe('BarnaclePage', () => {
  let component: BarnaclePage;
  let fixture: ComponentFixture<BarnaclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarnaclePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarnaclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
