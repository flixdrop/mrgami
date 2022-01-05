import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { GeoLocationService } from 'src/app/services/geo-location.service';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-onboarding-page',
  templateUrl: './onboarding-page.page.html',
  styleUrls: ['./onboarding-page.page.scss'],
})
export class OnboardingPagePage implements OnInit{

  data: any;
  @ViewChild('mySlider') slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  selectedLanguage: any = '';

  constructor(public router: Router, private translateService: TranslateService, private locService: GeoLocationService){
    // this.locService.getGeolocation();
    // console.log('current-location in onboarding page- ', this.locService.currentLocation.value);
    // if(this.locService.currentLocation.value === "Karnataka"){
    //   this.selectedLanguage = "kannada";
    // }
  }

  ngOnInit(){
      console.log('Timeout started');
      // this.locService.getGeolocation();
      console.log('current-location in onboarding page- ', this.locService.currentLocation.value);
      if(this.locService.currentLocation.value === "Karnataka"){
      this.selectedLanguage = "ಕನ್ನಡ";
      }
      console.log('Timeout ended');
  }

  next() {
    this.slides.slideNext();
  }

  prev() {
    this.slides.slidePrev();
  }

  onClickFinish(){
    this.router.navigateByUrl('/login');
  }

  onLanguageChanged(event){
    this.selectedLanguage = event.detail.value;
    this.translateService.currentLanguage.next(this.selectedLanguage);
  }

  doTranslation(text){
    var translateText = this.translateService.doTranslation(text, this.selectedLanguage);
    return translateText;
  }
}
