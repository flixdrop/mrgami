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

  data: any = [];
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  
  };
  viewEntered: boolean;
  data2: any;

  constructor(public service: MyadsService, public modalController: ModalController,
    public router: Router,
    public sellerFormApiService:SellerFormApiService ) {}

  ngOnInit(){
   // this.data = this.service.data;
    this.getAllads();
    
  }
  ionViewDidEnter() {
    this.viewEntered = true;
}

getAllads() {
  this.sellerFormApiService.getData().subscribe((data2) => {
    this.data2 = data2;
    //console.log("ImageUrls",data2.imageUrls);
    console.log("data2",data2);
 
  });
  // console.log('27lines',this.sellerFormApiService.data);
}
  onDelete(i){
    this.service.data.splice(i,1);
  }
  onPost(i){
    alert("Your ad with id "+i+" is yet to be approved");
    //this.router.navigateByUrl('');
  }
  async presentModal(i) {
    const modal = await this.modalController.create({
      component: MyadsModalPage,
      componentProps: {
        imgUrl: this.data[i].imgUrl,
        animal: this.data[i].animal,
        breed: this.data[i].breed,
        location: this.data[i].location,
        status: this.data[i].status,
        milkPerDay: this.data[i].milkPerDay,
        age: this.data[i].age,
        calf: this.data[i].calf,
      },
    });
    return await modal.present();
  }

}
