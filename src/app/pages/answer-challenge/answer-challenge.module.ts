import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnswerChallengePageRoutingModule } from './answer-challenge-routing.module';

import { AnswerChallengePage } from './answer-challenge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AnswerChallengePageRoutingModule
  ],
  declarations: [AnswerChallengePage]
})
export class AnswerChallengePageModule {}
