import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SellerFormPage } from '../seller-form/seller-form.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  addSellerForm=[];

  constructor(public modalCntrl:ModalController) {}
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
}
