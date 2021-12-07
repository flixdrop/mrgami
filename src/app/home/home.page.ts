import { DataService } from "../data.service";
import { CartService } from "./../services/cart.service";
import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CartModalPage } from "../pages/cart-modal/cart-modal.page";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { SellerFormApiService } from "../services/seller-form-api.service";

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
    grabCursor: true
  };
  searchTerm: any;
  getApiData: any;

  constructor(private data: DataService, private router: Router, private sellerFormApiService: SellerFormApiService) {}

  ngOnInit() {
    // this.categories = this.data.getCategories();
    // this.featuredProducts = this.data.getFeaturedProducts();
    // this.bestSellProducts = this.data.getBestSellProducts();
    this.getAllads();
  }

  getAllads() {
    this.sellerFormApiService.getData().subscribe((result) => {
      this.getApiData = result;
      console.log('getApiData- ', this.getApiData);
    });
  }

  doRefresh(event) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2500);
  }

  onClickFab(){
    this.router.navigateByUrl('/tabs/seller-form');
  }

}
