import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedModalPage } from './med-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MedModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedModalPageRoutingModule {}
