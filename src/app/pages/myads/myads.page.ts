import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyadsService } from '../../services/myads.service';
import { MyadsModalPage } from '../../pages/myads-modal/myads-modal.page';
import { Router } from '@angular/router';
import { SellerFormApiService } from 'src/app/services/seller-form-api.service';

@Component({
  selector: 'app-myads',
  templateUrl: './myads.page.html',
  styleUrls: ['./myads.page.scss'],
})
export class MyadsPage implements OnInit {
  
  data: any;
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  
  };
  viewEntered: boolean;
  searchTerm: any;

  constructor(public service: MyadsService, public modalController: ModalController,
    public router: Router,
    public sellerFormApiService:SellerFormApiService ) {}

  ngOnInit(){
    this.getAllads();
    
  }
  ionViewDidEnter() {
    this.viewEntered = true;
}

getAllads() {
  this.sellerFormApiService.getData().subscribe((result) => {
    this.data = result;
    console.log('data- ', this.data);
  });
  // console.log('27lines',this.sellerFormApiService.data);
}
  onDelete(i){
    this.service.data.splice(i, 1);
  }
  onPost(i){
    alert("Your ad with id "+i+" is yet to be approved");
  }
  async presentModal(i) {
    const modal = await this.modalController.create({
      component: MyadsModalPage,
      componentProps: {
        imgUrl: this.data[i].imageUrls.imagesList,
        animal: this.data[i].type,
        breed: this.data[i].breed,
        location: this.data[i].lactationNumber,
        milkPerDay: this.data[i].milkPerDay,
        age: this.data[i].age,
      },
    });
    return await modal.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2500);
  }
}
