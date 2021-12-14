import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalFeedsPage } from './animal-feeds.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalFeedsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalFeedsPageRoutingModule {}
