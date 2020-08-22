import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BottlenosePage } from './bottlenose.page';

describe('BottlenosePage', () => {
  let component: BottlenosePage;
  let fixture: ComponentFixture<BottlenosePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottlenosePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BottlenosePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
