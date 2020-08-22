import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoggerheadPage } from './loggerhead.page';

describe('LoggerheadPage', () => {
  let component: LoggerheadPage;
  let fixture: ComponentFixture<LoggerheadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggerheadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoggerheadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
