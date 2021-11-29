import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  public categories = [];
  images: any;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: 25,
    speed: 500,
  };
  constructor( private util: UtilService,
    private navCtrl: NavController,private data: DataService,) { 
    
  }

  ngOnInit() {
    this.categories = this.data.getTodaysOffers();
    this.images = [
      '../assets/todaysoffers.PNG',
      '../assets/todaysoffers.PNG',
      '../assets/todaysoffers.PNG',
      '../assets/todaysoffers.PNG',
      '../assets/todaysoffers.PNG',
      '../assets/todaysoffers.PNG',
      '../assets/todaysoffers.PNG',
      '../assets/todaysoffers.PNG',
    ];
  }


  goToBuy(){
  this.navCtrl.navigateRoot('home', { animationDirection: 'forward' });
  }
  goToMedicine(){
  this.navCtrl.navigateRoot('medicines', { animationDirection: 'forward' });
  }
  goToFeed(){
    this.navCtrl.navigateRoot('home', { animationDirection: 'forward' });
    }
    goToSemen(){
      this.navCtrl.navigateRoot('home', { animationDirection: 'forward' });
      }
}
