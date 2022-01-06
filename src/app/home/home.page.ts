import { DataService } from "../data.service";
import { CartService } from "./../services/cart.service";
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CartModalPage } from "../pages/cart-modal/cart-modal.page";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { SellerFormApiService } from "../services/seller-form-api.service";
import { TranslateService } from "../services/translate.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
})
export class HomePage implements OnInit {
  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 3,
    spaceBetween: 10,
    speed: 500,
    zoom: false,
    grabCursor: true,
  };
  searchTerm: any;
  getApiData: any;
 

  dummydata: any = [
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
      "img": "data:image/jpeg;base64,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",
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
      "img": "https://www.konnecthq.com/wp-content/uploads/2019/07/cow-1-10-1.jpg",
      "animalName": "Jackson",
      "quotedPrice": "50000",
      "breed": "Jersy",
      "Lactation": "4",
      "Milk/Day": "10",
      "Age": "50",
    }
  ];

  constructor(
    private data: DataService,
    private router: Router,
    private sellerFormApiService: SellerFormApiService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {
    // this.categories = this.data.getCategories();
    // this.featuredProducts = this.data.getFeaturedProducts();
    // this.bestSellProducts = this.data.getBestSellProducts();
    this.getAllads();
  }

  getAllads() {
    this.sellerFormApiService.getData().subscribe((result) => {
      this.getApiData = result;
      console.log("getApiData- ", this.getApiData);
    });
  }

  doRefresh(event) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2500);
  }

  onClickFab() {
    this.router.navigateByUrl("/tabs/seller-form");
  }

  doTranslation(text) {
    var translateText = this.translateService.doTranslation(
      text,
      this.translateService.currentLanguage.value
    );
    return translateText;
  }
}
