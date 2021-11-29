import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyadsModalPage } from './myads-modal.page';

describe('MyadsModalPage', () => {
  let component: MyadsModalPage;
  let fixture: ComponentFixture<MyadsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyadsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyadsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
