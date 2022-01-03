import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {
  num: number;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }
  onDecrease(){
    this.num=0;
    if(this.num < 0){
      alert("Item quantity cannot be 0")
    }
    else{
    this.num-=1;
    }
  }
  onIncrease(){
    this.num=0;
    if(this.num < 0){
      alert("Item quantity cannot be 0")
    }
    else{
    this.num+=1;
    }
  }

  doTranslation(text){
    var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
    return translateText;
  }
}
