import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetlocationComponent } from './getlocation.component';

describe('GetlocationComponent', () => {
  let component: GetlocationComponent;
  let fixture: ComponentFixture<GetlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetlocationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
