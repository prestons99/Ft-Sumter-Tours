import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManateePage } from './manatee.page';

describe('ManateePage', () => {
  let component: ManateePage;
  let fixture: ComponentFixture<ManateePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManateePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManateePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
