import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnimalViewPage } from './animal-view.page';

describe('AnimalViewPage', () => {
  let component: AnimalViewPage;
  let fixture: ComponentFixture<AnimalViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
