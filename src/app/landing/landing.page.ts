import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from '../util.service';
import { DataService } from '../data.service';
import { MediaCapture, MediaFile, CaptureAudioOptions } from '@ionic-native/media-capture/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

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
  audio: any;
  keys: string[] = [];
  
  constructor( private util: UtilService,
    private navCtrl: NavController, private data: DataService, private media: MediaCapture, private opener: FileOpener) { 
    
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
  this.navCtrl.navigateRoot('tabs/home', { animationDirection: 'forward' });
  }
  goToMedicine(){
  this.navCtrl.navigateRoot('tabs/medicines', { animationDirection: 'forward' });
  }
  goToFeed(){
    this.navCtrl.navigateRoot('tabs/home', { animationDirection: 'forward' });
    }
    goToSemen(){
      this.navCtrl.navigateRoot('home', { animationDirection: 'forward' });
      }

      recordAudio(){
        var option: CaptureAudioOptions = {
          limit: 1
        }
        this.media.captureAudio(option).then((mediaFile: MediaFile[]) => {
        this.audio = mediaFile[0];
        this.keys = Object.keys(this.audio); 
        })
    }

    playAudio(){
      this.opener.open(this.audio.fullPath, "audio/mpeg");
    }
}