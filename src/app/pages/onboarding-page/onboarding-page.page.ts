import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-onboarding-page',
  templateUrl: './onboarding-page.page.html',
  styleUrls: ['./onboarding-page.page.scss'],
})
export class OnboardingPagePage{

  data: any;
  @ViewChild('mySlider') slides: IonSlides;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };
  selectedLanguage: any = "english";

  constructor(public router: Router, private service: TranslateService){}

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
    this.service.currentLanguage.next(this.selectedLanguage);
  }

  doTranslation(text){
    var translateText = this.service.doTranslation(text, this.selectedLanguage);
    return translateText;
  }
}
