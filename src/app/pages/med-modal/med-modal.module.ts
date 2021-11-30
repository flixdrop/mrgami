import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedModalPageRoutingModule } from './med-modal-routing.module';

import { MedModalPage } from './med-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedModalPageRoutingModule
  ],
  declarations: [MedModalPage]
})
export class MedModalPageModule {}
