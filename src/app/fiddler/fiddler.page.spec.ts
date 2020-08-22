import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiddlerPage } from './fiddler.page';

describe('FiddlerPage', () => {
  let component: FiddlerPage;
  let fixture: ComponentFixture<FiddlerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiddlerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiddlerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
