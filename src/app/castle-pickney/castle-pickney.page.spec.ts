import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CastlePickneyPage } from './castle-pickney.page';

describe('CastlePickneyPage', () => {
  let component: CastlePickneyPage;
  let fixture: ComponentFixture<CastlePickneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastlePickneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CastlePickneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
