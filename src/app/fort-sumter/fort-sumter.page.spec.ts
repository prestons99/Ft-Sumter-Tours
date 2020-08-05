import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FortSumterPage } from './fort-sumter.page';

describe('FortSumterPage', () => {
  let component: FortSumterPage;
  let fixture: ComponentFixture<FortSumterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortSumterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FortSumterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
