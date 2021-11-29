import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerFormPage } from './seller-form.page';

const routes: Routes = [
  {
    path: '',
    component: SellerFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerFormPageRoutingModule {}
