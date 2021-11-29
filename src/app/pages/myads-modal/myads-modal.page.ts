import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-myads-modal',
  templateUrl: './myads-modal.page.html',
  styleUrls: ['./myads-modal.page.scss'],
})
export class MyadsModalPage {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
 
  };

  @Input() imgUrl: string;
  @Input() animal: string;
  @Input() breed: string;
  @Input() location: string;
  @Input() status: string;
  @Input() milkPerDay: string;
  @Input() age: string;
  @Input() calf: string;
  viewEntered: boolean;

  ngOnInit(){

    this.imgUrl.trim();
    console.log('imgUrl- ', this.imgUrl);
  }

  constructor(public modalController: ModalController) {}

  ionViewDidEnter() {
    this.viewEntered = true;
}
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
