import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerFormPage } from './seller-form.page';
import { SellerFormPageRoutingModule } from './seller-form-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SellerFormPageRoutingModule,
    HttpClientModule
  ],
  declarations: [SellerFormPage],
  bootstrap: [SellerFormPage]
  
  
})
export class SellerFormPageModule {}
