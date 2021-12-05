import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SellerFormPipe } from './seller-form.pipe';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GetlocationComponent } from './components/getlocation/getlocation.component';
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { CartModalPageModule } from './pages/cart-modal/cart-modal.module';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { MedModalPage } from './pages/med-modal/med-modal.page';

@NgModule({
  declarations: [AppComponent, SellerFormPipe,],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CartModalPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
    NativeGeocoder,
    LoginService,
    MediaCapture,
    MedModalPage,
    FileOpener
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
