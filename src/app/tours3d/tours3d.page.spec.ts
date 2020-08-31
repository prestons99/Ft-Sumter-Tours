import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tours3dPage } from './tours3d.page';

describe('Tours3dPage', () => {
  let component: Tours3dPage;
  let fixture: ComponentFixture<Tours3dPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tours3dPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tours3dPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
