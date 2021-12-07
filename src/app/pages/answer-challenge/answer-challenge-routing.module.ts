import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnswerChallengePage } from './answer-challenge.page';

const routes: Routes = [
  {
    path: '',
    component: AnswerChallengePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnswerChallengePageRoutingModule {}
