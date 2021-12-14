import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { FeedModalPage } from '../feed-modal/feed-modal.page';
import { DataService } from "../../data.service";
import { CartService } from "../../services/cart.service";
import { ModalController } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-animal-feeds',
  templateUrl: './animal-feeds.page.html',
  styleUrls: ['./animal-feeds.page.scss'],
})
export class AnimalFeedsPage implements OnInit {

  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  @ViewChild("cart", { static: false, read: ElementRef }) fab: ElementRef;
  searchTerm: any;

  constructor(
    private data: DataService,
    private cartService: CartService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.products = this.cartService.getAnimalFeed();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
    this.animateCSS("tada");
  }

  async openCart() {
    this.animateCSS("bounceOutLeft", true);

    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: "cart-modal",
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove("animated", "bounceOutLeft");
      this.animateCSS("bounceInLeft");
    });
    modal.present();
  }

  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add("animated", animationName);

    //https://github.com/daneden/animate.css
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove("animated", animationName);
      }
      node.removeEventListener("animationend", handleAnimationEnd);
    }
    node.addEventListener("animationend", handleAnimationEnd);
  }

  async medModal(product){
    let modal = await this.modalCtrl.create({
      component: FeedModalPage,
      cssClass: "cart-modal",
      componentProps: {
        'name': product.name,
        'image': product.image,
        'price': product.price
      }
    });
    modal.present();
  }

  doRefresh(event) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2500);
  }
}
