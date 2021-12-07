import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnswerChallengePage } from './answer-challenge.page';

describe('AnswerChallengePage', () => {
  let component: AnswerChallengePage;
  let fixture: ComponentFixture<AnswerChallengePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerChallengePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnswerChallengePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
