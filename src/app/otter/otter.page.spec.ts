import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtterPage } from './otter.page';

describe('OtterPage', () => {
  let component: OtterPage;
  let fixture: ComponentFixture<OtterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
