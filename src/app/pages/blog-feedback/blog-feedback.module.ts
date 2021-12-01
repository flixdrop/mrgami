import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlogFeedbackPageRoutingModule } from './blog-feedback-routing.module';

import { BlogFeedbackPage } from './blog-feedback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlogFeedbackPageRoutingModule
  ],
  declarations: [BlogFeedbackPage]
})
export class BlogFeedbackPageModule {}
