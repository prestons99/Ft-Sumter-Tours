import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DrumPage } from './drum.page';

describe('DrumPage', () => {
  let component: DrumPage;
  let fixture: ComponentFixture<DrumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrumPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DrumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
