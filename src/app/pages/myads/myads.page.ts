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

  dummydata: any = [
    {
      "img": "https://www.konnecthq.com/wp-content/uploads/2019/07/cow-1-10-1.jpg",
      "animalName": "Jackson",
      "quotedPrice": "50000",
      "breed": "Jersy",
      "Lactation": "4",
      "Milk/Day": "10",
      "Age": "50",
    },
    {
      "img": "https://prod-ttp.imgix.net/63114653-ab1c-4351-a1b3-458362a7fdd4/cow.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C4725%2C2700&w=1600&h=914&fit=crop&fm=jpg&q=70&auto=format",
      "animalName": "Jackson",
      "quotedPrice": "50000",
      "breed": "Jersy",
      "Lactation": "4",
      "Milk/Day": "10",
      "Age": "50",
    },
    {
      "img": "https://media.istockphoto.com/photos/fynny-cow-portrait-open-mouth-mooing-with-horns-picture-id1198213022?s=2048x2048",
      "animalName": "Jackson",
      "quotedPrice": "50000",
      "breed": "Jersy",
      "Lactation": "4",
      "Milk/Day": "10",
      "Age": "50",
    },
    {
      "img": "https://prod-ttp.imgix.net/63114653-ab1c-4351-a1b3-458362a7fdd4/cow.jpg?auto=compress%2Cformat&fit=min&fm=jpg&q=80&rect=0%2C0%2C4725%2C2700&w=1600&h=914&fit=crop&fm=jpg&q=70&auto=format",
      "animalName": "Jackson",
      "quotedPrice": "50000",
      "breed": "Jersy",
      "Lactation": "4",
      "Milk/Day": "10",
      "Age": "50",
    }
  ];


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
