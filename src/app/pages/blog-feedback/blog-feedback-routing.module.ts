import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogFeedbackPage } from './blog-feedback.page';

const routes: Routes = [
  {
    path: '',
    component: BlogFeedbackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogFeedbackPageRoutingModule {}
