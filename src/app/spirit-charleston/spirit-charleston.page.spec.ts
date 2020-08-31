import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpiritCharlestonPage } from './spirit-charleston.page';

describe('SpiritCharlestonPage', () => {
  let component: SpiritCharlestonPage;
  let fixture: ComponentFixture<SpiritCharlestonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpiritCharlestonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpiritCharlestonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
