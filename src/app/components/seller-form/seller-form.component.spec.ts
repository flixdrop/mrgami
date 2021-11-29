import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellerFormComponent } from './seller-form.component';

describe('SellerFormComponent', () => {
  let component: SellerFormComponent;
  let fixture: ComponentFixture<SellerFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
