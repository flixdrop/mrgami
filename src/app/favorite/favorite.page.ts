import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  doTranslation(text){
    var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
    return translateText;
  }

}
