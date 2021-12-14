import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnimalFeedsPageRoutingModule } from './animal-feeds-routing.module';

import { AnimalFeedsPage } from './animal-feeds.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnimalFeedsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [AnimalFeedsPage]
})
export class AnimalFeedsPageModule {}
