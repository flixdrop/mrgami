import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SellerFormPage } from './seller-form.page';

describe('SellerFormPage', () => {
  let component: SellerFormPage;
  let fixture: ComponentFixture<SellerFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SellerFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
