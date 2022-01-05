import { Component, OnInit } from "@angular/core";
import { ModalController, NavController } from "@ionic/angular";
import { UtilService } from "../util.service";
import { DataService } from "../data.service";
import {
  MediaCapture,
  MediaFile,
  CaptureAudioOptions,
} from "@ionic-native/media-capture/ngx";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { Router } from "@angular/router";
import { ChatbotPage } from "../pages/chatbot/chatbot.page";
import { TranslateService } from "../services/translate.service";
import { AuthService } from "../services/auth.service";
import { GeoLocationService } from "../services/geo-location.service";
import { SellerFormApiService } from "../services/seller-form-api.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.page.html",
  styleUrls: ["./landing.page.scss"],
})
export class LandingPage implements OnInit {
  public categories = [];
  images: any;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: 10,
    speed: 500,
  };
  audio: any;
  keys: string[] = [];
  isAuthenticated: any = undefined;
  selectedLanguage: any = "";
  constructor(
    private util: UtilService,
    private navCtrl: NavController,
    private router: Router,
    private data: DataService,
    private media: MediaCapture,
    private opener: FileOpener,
    private modalCtrl: ModalController,
    private translateService: TranslateService,
    private auth: AuthService,
    private locService: GeoLocationService,
    private sellerFormApiService: SellerFormApiService
  ) {}

  ngOnInit() {
    this.categories = this.data.getTodaysOffers();
    this.images = [
      "../assets/todaysoffers.PNG",
      "../assets/todaysoffers.PNG",
      "../assets/todaysoffers.PNG",
      "../assets/todaysoffers.PNG",
      "../assets/todaysoffers.PNG",
      "../assets/todaysoffers.PNG",
      "../assets/todaysoffers.PNG",
      "../assets/todaysoffers.PNG",
    ];

    const userDetails = this.auth.getUserDetails().then((data) => {
      console.log("data- ", data);
      if(data){
        this.isAuthenticated = data[2]['Value'];
      }
      else{
        this.isAuthenticated = false;
      }
      this.sellerFormApiService.userId.next(data[0]['Value']);
    });

    this.locService.getGeolocation();
    console.log(
      "current-location in onboarding page- ",
      this.locService.currentLocation.value
    );
  }

  goToBuy() {
    this.navCtrl.navigateRoot("tabs/home", { animationDirection: "forward" });
  }
  goToMedicine() {
    this.navCtrl.navigateRoot("tabs/medicines", {
      animationDirection: "forward",
    });
  }
  goToFeed() {
    this.navCtrl.navigateRoot("tabs/animal-feeds", {
      animationDirection: "forward",
    });
  }
  // goToSemen() {
  //   this.navCtrl.navigateRoot("home", { animationDirection: "forward" });
  // }

  recordAudio() {
    var option: CaptureAudioOptions = {
      limit: 1,
    };
    this.media.captureAudio(option).then((mediaFile: MediaFile[]) => {
      this.audio = mediaFile[0];
      this.keys = Object.keys(this.audio);
    });
  }

  playAudio() {
    this.opener.open(this.audio.fullPath, "audio/mpeg");
  }

  onClickChatbot() {
    this.chatModal();
    this.router.navigateByUrl("/tabs/chatbot");
  }

  async chatModal() {
    let modal = await this.modalCtrl.create({
      component: ChatbotPage,
      cssClass: "cart-modal",
    });
    modal.present();
  }

  doTranslation(text) {
    var translateText = this.translateService.doTranslation(
      text,
      this.translateService.currentLanguage.value
    );
    return translateText;
  }

  onLanguageChanged(event) {
    this.selectedLanguage = event.detail.value;
    this.translateService.currentLanguage.next(this.selectedLanguage);
  }

  async onClickLogout() {
    this.isAuthenticated = undefined;
    await this.auth.signOut();
    this.router.navigateByUrl("/tabs/landing");
  }
}
