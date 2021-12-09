import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingPagePageRoutingModule } from './onboarding-page-routing.module';

import { OnboardingPagePage } from './onboarding-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingPagePageRoutingModule
  ],
  declarations: [OnboardingPagePage]
})
export class OnboardingPagePageModule {}
