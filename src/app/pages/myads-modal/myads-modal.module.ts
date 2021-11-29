import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyadsModalPageRoutingModule } from './myads-modal-routing.module';

import { MyadsModalPage } from './myads-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyadsModalPageRoutingModule
  ],
  declarations: [MyadsModalPage]
})
export class MyadsModalPageModule {}
