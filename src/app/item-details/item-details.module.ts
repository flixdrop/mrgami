import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemDetailsPageRoutingModule } from './item-details-routing.module';

import { ItemDetailsPage } from './item-details.page';
import { GetlocationComponent } from '../components/getlocation/getlocation.component';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemDetailsPageRoutingModule
  ],

  declarations: [ItemDetailsPage, GetlocationComponent]
})
export class ItemDetailsPageModule {}
