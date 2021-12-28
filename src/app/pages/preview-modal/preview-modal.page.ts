import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public modalController: ModalController, private router: Router) {}

  dismiss() {
    this.router.navigateByUrl('tabs/landing');
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
