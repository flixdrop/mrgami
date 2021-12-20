import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackModalPageRoutingModule } from './feedback-modal-routing.module';

import { FeedbackModalPage } from './feedback-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackModalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FeedbackModalPage]
})
export class FeedbackModalPageModule {}
