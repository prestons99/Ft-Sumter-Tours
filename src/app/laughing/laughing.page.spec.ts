import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaughingPage } from './laughing.page';

describe('LaughingPage', () => {
  let component: LaughingPage;
  let fixture: ComponentFixture<LaughingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaughingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaughingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
