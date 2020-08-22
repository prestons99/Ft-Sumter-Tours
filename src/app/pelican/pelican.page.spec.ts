import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PelicanPage } from './pelican.page';

describe('PelicanPage', () => {
  let component: PelicanPage;
  let fixture: ComponentFixture<PelicanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelicanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PelicanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
