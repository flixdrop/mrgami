import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyadsService } from '../../services/myads.service';
import { MyadsModalPage } from '../../pages/myads-modal/myads-modal.page';
import { Router } from '@angular/router';
import { SellerFormApiService } from 'src/app/services/seller-form-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { TranslateService } from 'src/app/services/translate.service';

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
  userId: any;
  username: any;
  phno: any;

  constructor(
    public service: MyadsService, 
    public modalController: ModalController,
    public router: Router,
    public sellerFormApiService: SellerFormApiService,
    private auth: AuthService,
    private loginService: LoginService,
    private translateService: TranslateService
    ) {}

  ngOnInit(){
      this.getAllads();
      console.log('data- ', this.data);
  }

  ionViewDidEnter() {
    this.viewEntered = true;
}

getAllads() {
  this.sellerFormApiService.getData().subscribe((result) => {
    this.data = result;
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

  doTranslation(text){
    var translateText = this.translateService.doTranslation(text, this.translateService.currentLanguage.value);
    return translateText;
  }
}
