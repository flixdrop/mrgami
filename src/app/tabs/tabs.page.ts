import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SellerFormPage } from '../seller-form/seller-form.page';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  addSellerForm=[];

  constructor(public modalCntrl:ModalController, private router: Router, private translateService: TranslateService) {}

  async popSellerForm(){
    console.log("Seller-Form-Popped Up");
    const modal = await this.modalCntrl.create({
      component:SellerFormPage
    })
    modal.onWillDismiss().then(() => {
     // this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      //this.animateCSS('bounceInLeft');
       this.modalCntrl.getTop();
    });
  
    modal.present();
  }

  navigateTO(link){
    this.router.navigateByUrl('/tabs/'+link);
  }

  doTranslation(text){
    var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
    return translateText;
  }
}
