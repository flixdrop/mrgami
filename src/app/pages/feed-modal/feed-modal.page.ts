import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feed-modal',
  templateUrl: './feed-modal.page.html',
  styleUrls: ['./feed-modal.page.scss'],
})
export class FeedModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  @Input() name: string;
  @Input() image: string;
  @Input() price: number;

  ngOnInit() {
    console.log('name- ', this.name);
    console.log('image- ', this.image);
    console.log('price- ', this.price);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
