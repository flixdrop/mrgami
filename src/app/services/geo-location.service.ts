import { Injectable, OnInit } from '@angular/core';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
@Injectable({
  providedIn: 'root'
})
export class GeoLocationService{

address: string;

// Location coordinates
latitude: number;
longitude: number;
accuracy: number;

//Geocoder configuration
geoencoderOptions: NativeGeocoderOptions = {
  useLocale: true,
  maxResults: 5
};
  fullAddress: string;
constructor(
  private geolocation: Geolocation,
  private nativeGeocoder: NativeGeocoder
) {}

 //Get current coordinates of device
 getGeolocation() {
  this.geolocation.getCurrentPosition().then((resp) => {

    this.latitude = resp.coords.latitude;
    this.longitude = resp.coords.longitude;
    this.accuracy = resp.coords.accuracy;

    this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);

  }).catch((error) => {
    alert('Error getting location' + JSON.stringify(error));
  });
}

//geocoder method to fetch address from coordinates passed as arguments
getGeoencoder(latitude, longitude) {
  this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
    .then((result: NativeGeocoderResult[]) => {
      console.log("In geolocation",result);
      this.address = result[0]['subLocality'] +','+result[0]['locality']+','+result[0]['administrativeArea'];
     // this.fullAddress= this.generateAddress(result[0]);
     console.log('address- ', this.address);
    })
    .catch((error: any) => {
      alert('Error getting location' + JSON.stringify(error));
    });
}

//Return Comma saperated address
generateAddress(addressObj) {
  const obj = [];
  let address = "";
  for (const key in addressObj) {
    obj.push(addressObj[key]);
  }
  obj.reverse();
  for (const val in obj) {
    if (obj[val].length)
      {
        address += obj[val] + ', ';
    }
  }
  return address.slice(0, -2);
}
}
