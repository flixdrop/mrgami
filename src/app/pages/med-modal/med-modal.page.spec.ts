import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedModalPage } from './med-modal.page';

describe('MedModalPage', () => {
  let component: MedModalPage;
  let fixture: ComponentFixture<MedModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
