import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-preview-modal',
  templateUrl: './preview-modal.page.html',
  styleUrls: ['./preview-modal.page.scss'],
})
export class PreviewModalPage implements OnInit {

  @Input() data: any;

  ngOnInit(){
    console.log('data- ', this.data);
  }

  constructor(public modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
