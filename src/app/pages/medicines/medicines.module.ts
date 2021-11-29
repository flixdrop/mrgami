import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicinesPageRoutingModule } from './medicines-routing.module';

import { MedicinesPage } from './medicines.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicinesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [MedicinesPage]
})
export class MedicinesPageModule {}
