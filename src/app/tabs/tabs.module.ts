import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { GetlocationComponent } from '../components/getlocation/getlocation.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  providers: [ Geolocation,
    NativeGeocoder],
  declarations: [TabsPage]
})
export class TabsPageModule {}
